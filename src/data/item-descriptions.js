import { items } from './items';
import { INDIVIDUAL_RU_DESCRIPTIONS } from './individual-item-descriptions';
import { INDIVIDUAL_EN_DESCRIPTIONS } from './individual-item-descriptions-en';
import { getLocalizedItemTitle } from './titles-en';

function capitalize(value) {
  if (!value) return '';
  return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
}

const DESCRIPTION_BUILDERS = {
  frukty: {
    ru: (name) => `${name} — съедобный плод или ягода. Его употребляют свежим и используют в напитках, десертах и других блюдах.`,
    en: (name) => `${name} is an edible fruit or berry, eaten fresh and used in drinks, desserts, and other dishes.`,
  },
  ovoshchi: {
    ru: (name) => `${name} — съедобный растительный продукт. Его используют свежим или после приготовления как самостоятельный продукт, гарнир либо ингредиент блюда.`,
    en: (name) => `${name} is an edible plant product, used fresh or cooked as a standalone food, side dish, or ingredient.`,
  },
  sladosti_i_deserty: {
    ru: (name) => `${name} — сладкое блюдо или лакомство. Его обычно подают как десерт или небольшое угощение.`,
    en: (name) => `${name} is a sweet dish or treat, usually served as a dessert or a small indulgence.`,
  },
  napitki_bezalkogolnye: {
    ru: (name) => `${name} — безалкогольный напиток. Его пьют для утоления жажды, вкуса или как дополнение к еде.`,
    en: (name) => `${name} is a non-alcoholic drink, enjoyed for refreshment, flavor, or alongside food.`,
  },
  populyarnye_blyuda: {
    ru: (name) => `${name} — готовое блюдо, узнаваемое по своему составу и способу приготовления. Его подают как основную еду, закуску или гарнир.`,
    en: (name) => `${name} is a prepared dish recognized by its ingredients and cooking method, served as a main meal, snack, or side.`,
  },
  fastfud: {
    ru: (name) => `${name} — блюдо или напиток быстрого обслуживания. Его готовят и подают так, чтобы было удобно съесть или выпить без долгого ожидания.`,
    en: (name) => `${name} is a quick-service food or drink, prepared and served for convenient consumption with little waiting.`,
  },
  sousy_i_pripravy: {
    ru: (name) => `${name} — соус, пряность или ароматная добавка. Её используют, чтобы изменить вкус, аромат или остроту блюда.`,
    en: (name) => `${name} is a sauce, spice, or aromatic seasoning used to change a dish's flavor, aroma, or heat.`,
  },
  vidy_sporta: {
    ru: (name) => `${name} — спортивная дисциплина или соревновательная физическая активность со своими правилами и техникой.`,
    en: (name) => `${name} is a sport or competitive physical activity with its own rules and techniques.`,
  },
  hobbi: {
    ru: (name) => `${name} — занятие для свободного времени. Оно помогает отдыхать, развивать навыки или заниматься интересным делом.`,
    en: (name) => `${name} is a leisure activity that can provide relaxation, skill development, or personal enjoyment.`,
  },
  videoigry: {
    ru: (name) => `${name} — видеоигра или игровая серия со своими правилами, задачами и виртуальным миром.`,
    en: (name) => `${name} is a video game or game series with its own rules, objectives, and virtual world.`,
  },
  nastolnye_igry: {
    ru: (name) => `${name} — настольная или карточная игра со своими правилами. В неё играют с помощью игрового поля, карт, фигур или слов.`,
    en: (name) => `${name} is a tabletop or card game with its own rules, played with a board, cards, pieces, or words.`,
  },
  filmy: {
    ru: (name) => `${name} — художественное экранное произведение с самостоятельным сюжетом и героями.`,
    en: (name) => `${name} is a fictional screen work with its own story and characters.`,
  },
  multfilmy: {
    ru: (name) => `${name} — анимационное произведение с самостоятельной историей и персонажами.`,
    en: (name) => `${name} is an animated work with its own story and characters.`,
  },
  serialy: {
    ru: (name) => `${name} — многосерийное экранное произведение, сюжет которого развивается на протяжении эпизодов.`,
    en: (name) => `${name} is an episodic screen production whose story develops across multiple episodes.`,
  },
  muzykalnye_zhanry: {
    ru: (name) => `${name} — музыкальный жанр или направление с характерными приёмами исполнения, ритмом и звучанием.`,
    en: (name) => `${name} is a music genre or style with characteristic performance techniques, rhythm, and sound.`,
  },
  muzykalnye_instrumenty: {
    ru: (name) => `${name} — музыкальный инструмент или устройство для создания и исполнения звука.`,
    en: (name) => `${name} is a musical instrument or device used to create and perform sound.`,
  },
  dostoprimechatelnosti: {
    ru: (name) => `${name} — известная природная, историческая или архитектурная достопримечательность, которую посещают и узнают по её облику.`,
    en: (name) => `${name} is a famous natural, historic, or architectural landmark recognized for its distinctive appearance.`,
  },
  tekhnologicheskie_brendy: {
    ru: (name) => `${name} — компания или бренд, связанный с технологиями, цифровыми продуктами либо электроникой.`,
    en: (name) => `${name} is a company or brand associated with technology, digital products, or electronics.`,
  },
  avtomobilnye_brendy: {
    ru: (name) => `${name} — автомобильная марка или производитель транспортной техники.`,
    en: (name) => `${name} is an automotive brand or a manufacturer of motor vehicles.`,
  },
  odezhda_i_obuv: {
    ru: (name) => `${name} — бренд одежды, обуви или модных аксессуаров.`,
    en: (name) => `${name} is a clothing, footwear, or fashion accessories brand.`,
  },
  predmety_byta: {
    ru: (name) => `${name} — предмет повседневного быта. Он используется дома для хранения, ухода, уборки, отдыха или других практических задач.`,
    en: (name) => `${name} is an everyday household item used for storage, care, cleaning, rest, or another practical task.`,
  },
  kuhonnaya_tehnika: {
    ru: (name) => `${name} — кухонный прибор или устройство. Оно помогает готовить, обрабатывать, хранить или подавать продукты и напитки.`,
    en: (name) => `${name} is a kitchen appliance or device used to prepare, process, store, or serve food and drinks.`,
  },
  gadjety: {
    ru: (name) => `${name} — электронное устройство или цифровой аксессуар, предназначенный для конкретных повседневных задач.`,
    en: (name) => `${name} is an electronic device or digital accessory designed for specific everyday tasks.`,
  },
  professii: {
    ru: (name) => `${name} — профессия или профессиональная роль, требующая определённых знаний, навыков и обязанностей.`,
    en: (name) => `${name} is a profession or professional role requiring particular knowledge, skills, and responsibilities.`,
  },
  cveta: {
    ru: (name) => `${name} — название цвета или оттенка, используемое для описания внешнего вида предметов, света и поверхностей.`,
    en: (name) => `${name} is the name of a color or shade used to describe the appearance of objects, light, and surfaces.`,
  },
  cvety: {
    ru: (name) => `${name} — цветущее растение, которое выращивают в природе, садах или помещениях ради его декоративного вида.`,
    en: (name) => `${name} is a flowering plant grown in nature, gardens, or indoors for its decorative appearance.`,
  },
  transport: {
    ru: (name) => `${name} — вид транспорта или транспортная услуга для перемещения людей и грузов по земле, воде либо воздуху.`,
    en: (name) => `${name} is a mode of transport or transport service used to move people and goods by land, water, or air.`,
  },
  porody_sobak: {
    ru: (name) => `${name} — порода собак с закреплёнными особенностями внешности, размеров и поведения.`,
    en: (name) => `${name} is a dog breed with established traits of appearance, size, and behavior.`,
  },
  domashnie_zhivotnye: {
    ru: (name) => `${name} — животное, которое люди содержат дома или в хозяйстве для общения, пользы либо разведения.`,
    en: (name) => `${name} is an animal kept at home or on a farm for companionship, practical use, or breeding.`,
  },
  dikie_zhivotnye: {
    ru: (name) => `${name} — дикое животное, естественная среда которого находится вне человеческого жилища и хозяйства.`,
    en: (name) => `${name} is a wild animal whose natural habitat lies outside human homes and farms.`,
  },
  morskie_zhivotnye: {
    ru: (name) => `${name} — морское или водное животное, приспособленное к жизни в воде либо тесно связанное с ней.`,
    en: (name) => `${name} is a marine or aquatic animal adapted to life in water or closely dependent on it.`,
  },
  ptitsy: {
    ru: (name) => `${name} — птица: позвоночное животное с перьями, клювом и крыльями.`,
    en: (name) => `${name} is a bird, a vertebrate animal with feathers, a beak, and wings.`,
  },
  derevya: {
    ru: (name) => `${name} — древесное или древовидное растение с многолетним стволом либо стеблем.`,
    en: (name) => `${name} is a woody or tree-like plant with a perennial trunk or stem.`,
  },
  prazdniki: {
    ru: (name) => `${name} — памятная дата, праздник или традиционный период, связанный с определёнными событиями и обычаями.`,
    en: (name) => `${name} is a commemorative date, holiday, or traditional period associated with particular events and customs.`,
  },
  sotsseti_i_servisy: {
    ru: (name) => `${name} — цифровая платформа или онлайн-сервис для общения, контента, развлечений либо совместной работы.`,
    en: (name) => `${name} is a digital platform or online service for communication, content, entertainment, or collaboration.`,
  },
  mobilnye_prilozheniya: {
    ru: (name) => `${name} — мобильное приложение или сервис, которым пользуются на смартфонах и планшетах.`,
    en: (name) => `${name} is a mobile application or service used on smartphones and tablets.`,
  },
  anime: {
    ru: (name) => `${name} — японское анимационное произведение или серия с собственным сюжетом и персонажами.`,
    en: (name) => `${name} is a Japanese animated work or series with its own story and characters.`,
  },
  supergeroi: {
    ru: (name) => `${name} — вымышленный персонаж или команда из комиксов и экранизаций, обладающие узнаваемым образом и особыми способностями.`,
    en: (name) => `${name} is a fictional character or team from comics and screen adaptations, known for a distinctive identity and special abilities.`,
  },
  kosmos: {
    ru: (name) => `${name} — космический объект, явление, устройство или понятие, связанное с изучением Вселенной.`,
    en: (name) => `${name} is a space object, phenomenon, device, or concept connected with the study of the universe.`,
  },
  pogoda_i_priroda: {
    ru: (name) => `${name} — природный объект, состояние среды или явление, возникающее в атмосфере либо на поверхности Земли.`,
    en: (name) => `${name} is a natural feature, environmental condition, or phenomenon occurring in the atmosphere or on Earth's surface.`,
  },
};

function getDescriptionKey(categoryId, itemId) {
  return `${categoryId}:${itemId}`;
}

function createDescription(item, locale = 'ru') {
  const normalizedLocale = locale === 'en' ? 'en' : 'ru';
  const name = capitalize(getLocalizedItemTitle(item, normalizedLocale));
  const builder = DESCRIPTION_BUILDERS[item.categoryId]?.[normalizedLocale];

  if (builder) return builder(name);

  return normalizedLocale === 'en'
    ? `${name} is an item from the “${item.categoryName}” category.`
    : `${name} — объект из категории «${item.categoryName}».`;
}

const categoryIndexes = new Map();

export const itemDescriptions = Object.fromEntries(items.map((item) => {
  const itemIndex = categoryIndexes.get(item.categoryId) ?? 0;
  categoryIndexes.set(item.categoryId, itemIndex + 1);

  const individualDescription = INDIVIDUAL_RU_DESCRIPTIONS[item.categoryId]?.[itemIndex];
  const individualEnglishDescription = INDIVIDUAL_EN_DESCRIPTIONS[item.categoryId]?.[itemIndex];

  return [
    getDescriptionKey(item.categoryId, item.id),
    {
      ru: individualDescription
        ? `${capitalize(getLocalizedItemTitle(item, 'ru'))} — ${individualDescription}.`
        : createDescription(item, 'ru'),
      en: individualEnglishDescription
        ? `${capitalize(getLocalizedItemTitle(item, 'en'))} — ${individualEnglishDescription}.`
        : createDescription(item, 'en'),
    },
  ];
}));

export function getItemDescription(item, locale = 'ru') {
  if (!item) return '';
  const description = itemDescriptions[getDescriptionKey(item.categoryId, item.id)];
  return description?.[locale] ?? description?.ru ?? createDescription(item, locale);
}
