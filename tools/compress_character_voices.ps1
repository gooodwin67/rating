param(
    [string]$FfmpegPath = "tmp\audio-tools\package\ffmpeg.exe",
    [int]$BitrateKbps = 64
)

$ErrorActionPreference = 'Stop'
$projectRoot = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$ffmpeg = (Resolve-Path (Join-Path $projectRoot $FfmpegPath)).Path
$voiceRoot = Join-Path $projectRoot 'public\audio\voices'
$stagingRoot = Join-Path $projectRoot 'tmp\compressed-russian-voices'
$characters = @('yellow', 'green', 'purple', 'red')

function Get-RelativeVoicePath([string]$FullName) {
    return $FullName.Substring($voiceRoot.Length).TrimStart('\', '/')
}

if (Test-Path -LiteralPath $stagingRoot) {
    Remove-Item -LiteralPath $stagingRoot -Recurse -Force
}
New-Item -ItemType Directory -Path $stagingRoot -Force | Out-Null

$sourceFiles = @(
    foreach ($character in $characters) {
        Get-ChildItem -LiteralPath (Join-Path $voiceRoot $character) -Recurse -File -Filter '*.mp3'
    }
)

foreach ($source in $sourceFiles) {
    $relative = Get-RelativeVoicePath $source.FullName
    $destination = Join-Path $stagingRoot $relative
    New-Item -ItemType Directory -Path (Split-Path -Parent $destination) -Force | Out-Null

    & $ffmpeg -hide_banner -loglevel error -y -i $source.FullName -map_metadata -1 -vn -ac 1 -ar 44100 -codec:a libmp3lame -b:a "${BitrateKbps}k" $destination
    if ($LASTEXITCODE -ne 0 -or !(Test-Path -LiteralPath $destination) -or (Get-Item -LiteralPath $destination).Length -eq 0) {
        throw "Failed to transcode $relative"
    }
}

$outputFiles = @(Get-ChildItem -LiteralPath $stagingRoot -Recurse -File -Filter '*.mp3')
if ($outputFiles.Count -ne $sourceFiles.Count) {
    throw "Expected $($sourceFiles.Count) files, created $($outputFiles.Count)."
}

foreach ($source in $sourceFiles) {
    $relative = Get-RelativeVoicePath $source.FullName
    Copy-Item -LiteralPath (Join-Path $stagingRoot $relative) -Destination $source.FullName -Force
}

$before = ($sourceFiles | Measure-Object Length -Sum).Sum
$published = @(
    foreach ($character in $characters) {
        Get-ChildItem -LiteralPath (Join-Path $voiceRoot $character) -Recurse -File -Filter '*.mp3'
    }
)
$after = ($published | Measure-Object Length -Sum).Sum

Write-Output "Compressed $($published.Count) Russian voices: $([math]::Round($before / 1MB, 2)) MiB -> $([math]::Round($after / 1MB, 2)) MiB"
