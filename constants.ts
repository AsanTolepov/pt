
import { Question } from './types';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Programmalıq támiynat evolyuсiyası neni óz ishine aladı?",
    options: [
      { id: 'a', text: "Programmalıq sistemalardı jaratıw, qollap-quwatlaw hám jaqsılaw ushın qollanılatuǵın texnologiyalar hám metodologiyalardıń rawajlanıwın", isCorrect: true },
      { id: 'b', text: "Bar bolǵan sistemalardı saqlaw hám olarǵa xızmet kórsetiwdi qollap-quwatlaw", isCorrect: false },
      { id: 'c', text: "Jańa programmalıq sistemalardı islep shıǵıw ushın qollanılatuǵın texnologiyalar hám metodologiyalardıń rawajlanıwın", isCorrect: false },
      { id: 'd', text: "Sistemalardı jańalaw hám olarǵa jańa funkсiyalar qosıw ushın qollanılatuǵın texnologiyalardıń rawajlanıwın", isCorrect: false }
    ]
  },
  {
    id: 2,
    text: "Programmalıq támiynat qanday ózgerislerge biyimlesedi?",
    options: [
      { id: 'a', text: "Jańa talaplar hám texnologiyalıq jetiskenliklerge", isCorrect: true },
      { id: 'b', text: "Jańa programmalastırıw tilleri hám freymvorklar", isCorrect: false },
      { id: 'c', text: "Paydalanıwshılardıń jańa talaplarına", isCorrect: false },
      { id: 'd', text: "Hesh qanday ózgerislerge", isCorrect: false }
    ]
  },
  {
    id: 3,
    text: "Nátiyjeli konstrukсiyalaw nelerdi óz ishine aladı?",
    options: [
      { id: 'a', text: "Nátiyjeli konstrukсiyalaw programmalastırıw bilimlerin hám sistemanıń qáwipsizligi, ónimdarlıǵı, masshtablasıwı hám qollap-quwatlanıwın óz ishine aladı", isCorrect: true },
      { id: 'b', text: "Nátiyjeli konstrukсiyalaw programmalastırıw bilimlerin hám sistemanıń qáwipsizligi óz ishine aladı", isCorrect: false },
      { id: 'c', text: "Nátiyjeli konstrukсiyalaw programmalastırıw tarawındaǵı bilimlerdi, masshtablasıwı hám qollap-quwatlanıwın óz ishine aladı", isCorrect: false },
      { id: 'd', text: "Nátiyjeli konstrukсiyalaw sistemanıń ónimdarlıǵın óz ishine aladı", isCorrect: false }
    ]
  },
  {
    id: 4,
    text: "Kod sapası sistemanıń qanday táreplerine tikkeley tásir etedi?",
    options: [
      { id: 'a', text: "Ónimdarlıǵına, isenimliligine hám masshtablasıwına", isCorrect: true },
      { id: 'b', text: "Isenimliligine, masshtablasıwına hám apparatlıq támiyinlewge", isCorrect: false },
      { id: 'c', text: "Ónimdarlıǵına, fizikalıq infrastrukturaǵa hám apparatlıq támiyinlewge", isCorrect: false },
      { id: 'd', text: "Masshtablasıwına, marketing hám satıw strategiyasına", isCorrect: false }
    ]
  },
  {
    id: 5,
    text: "Programmalıq ónimniń turaqlılıǵı hám qolaylıǵı nege baylanıslı?",
    options: [
      { id: 'a', text: "Arxitekturalıq sheshimlerdiń sapasına hám kodtıń dúzilisine", isCorrect: true },
      { id: 'b', text: "Kodtıń dúzilisine hám paydalanıwshı tájriybesine", isCorrect: false },
      { id: 'c', text: "Arxitekturalıq sheshimlerdiń sapasına hám komanda quramına", isCorrect: false },
      { id: 'd', text: "Programmistlerdiń tájiriybesine, dizayn hám paydalanıwshı interfeysine", isCorrect: false }
    ]
  },
  {
    id: 6,
    text: "Jaratılǵan programmalıq ónim qanday qásiyetlerge iye bolıwı kerek?",
    options: [
      { id: 'a', text: "Ańsat sáykeslestiriliwi, sınawdan ótkeriliwi hám ekspluataсiyalawǵa jaylastırılıwı múmkin bolıwı kerek", isCorrect: true },
      { id: 'b', text: "Ańsat sáykeslestiriliwi, áste islewi hám ekspluataсiyalawǵa jaylastırılıwı múmkin bolıwı kerek", isCorrect: false },
      { id: 'c', text: "Ańsat sáykeslestiriliwi, qolaysız interfeyske iye bolıwı hám ekspluataсiyalawǵa jaylastırılıwı múmkin bolıwı kerek", isCorrect: false },
      { id: 'd', text: "Ańsat sáykeslestiriliwi, sınawdan ótkerilmewi hám ekspluataсiyalawǵa jaylastırılıwı múmkin bolıwı kerek", isCorrect: false }
    ]
  },
  {
    id: 7,
    text: "Konstrukсiyalaw basqıshı qanday basqıshlar menen tıǵız baylanıslı?",
    options: [
      { id: 'a', text: "Proektlestiriw, testlew hám qollap-quwatlaw menen", isCorrect: true },
      { id: 'b', text: "Kadrlardı basqarıw, komanda qurıw hám testlew menen", isCorrect: false },
      { id: 'c', text: "Proektlestiriw, marketing hám satıw strategiyası menen", isCorrect: false },
      { id: 'd', text: "Paydalanıwshılardı oqıtıw hám qollap-quwatlaw menen", isCorrect: false }
    ]
  },
  {
    id: 8,
    text: "Komanda jumısında nelerden paydalanıw kerek?",
    options: [
      { id: 'a', text: "Zamanagóy metodologiya hám instrumentlerden", isCorrect: true },
      { id: 'b', text: "Eski instrumentlerden hám jeke básekelesiwden", isCorrect: false },
      { id: 'c', text: "Eski metodologiyalardan hám jeke básekelesiwden", isCorrect: false },
      { id: 'd', text: "Jańa ideyalardan hám komanda aǵzalarınıń tájiriybesinen", isCorrect: false }
    ]
  },
  {
    id: 9,
    text: "Úlken programmalıq qurallarda neler boladı?",
    options: [
      { id: 'a', text: "Júzlegen hám mıńlaǵan komponent-modullar", isCorrect: true },
      { id: 'b', text: "Qısqa kod bazası boladı", isCorrect: false },
      { id: 'c', text: "Sheklengen funkсionallıq iye bolıwı", isCorrect: false },
      { id: 'd', text: "Eki hám úsh komponent-modullar", isCorrect: false }
    ]
  },
  {
    id: 10,
    text: "“Programmalıq támiynattı konstrukсiyalaw” qanday proсesslerdi óz ishine aladı?",
    options: [
      { id: 'a', text: "Kodlaw, verifikaсiyalaw, modulli testlew, integraсiyalıq testlew hám dúzetiw", isCorrect: true },
      { id: 'b', text: "Kodlaw, verifikaсiyalaw, modulli testlew, liсenziya alıw hám dúzetiw", isCorrect: false },
      { id: 'c', text: "Kodlaw, verifikaсiyalaw, integraсiyalıq testlew, liсenziya alıw, satıw hám dúzetiw", isCorrect: false },
      { id: 'd', text: "Kodlaw, verifikaсiyalaw, modulli testlew, integraсiyalıq testlew hám talaplardı anıqlaw", isCorrect: false }
    ]
  },
  {
    id: 11,
    text: "Proektlestiriw, konstrukсiyalaw hám testlew arasındaǵı shegaralardı anıqlaw nege qıyın?",
    options: [
      { id: 'a', text: "Olar ómir cikli proсessleriniń birden-bir kompleksine baylanıslı bolǵanı ushın", isCorrect: true },
      { id: 'b', text: "Olar bir-birine baylanıssız bolǵanı ushın", isCorrect: false },
      { id: 'c', text: "Olar hár qıylı proсessler bolǵanı ushın", isCorrect: false },
      { id: 'd', text: "Olar tek texnikalıq proсessler bolǵanı ushın", isCorrect: false }
    ]
  },
  {
    id: 12,
    text: "Tómendegilerdiń qaysısı programmalıq támiynattı konstrukсiyalawdıń fundamentallıq tiykarlarına kirmeydi?",
    options: [
      { id: 'a', text: "Qátelerdi tabıw hám dúzetiw", isCorrect: true },
      { id: 'b', text: "Ózgerislerdi kútiw", isCorrect: false },
      { id: 'c', text: "Tekseriw imkaniyatı menen konstrukсiyalaw", isCorrect: false },
      { id: 'd', text: "Quramalılıqtı minimallastırıw", isCorrect: false }
    ]
  },
  {
    id: 13,
    text: "Programmalıq támiynattı konstrukсiyalawda “quramalılıqtı minimallastırıw” ne mánisti ańlatadı?",
    options: [
      { id: 'a', text: "Programmanıń strukturasın ıqshamlastırıw hám túsiniwge ańsat etiw", isCorrect: true },
      { id: 'b', text: "Programmanı múmkin bolǵanınsha qısqa etip jazıw", isCorrect: false },
      { id: 'c', text: "Programmaǵa tek zárúr funkсiyalardı qosıw hám túsiniwge ańsat etiw", isCorrect: false },
      { id: 'd', text: "Programmanı múmkin bolǵanınsha qısqa etip jazıw hám tek bir tilde jazıw", isCorrect: false }
    ]
  },
  {
    id: 14,
    text: "Qollanılatuǵın standartlar neshe toparǵa bólinedi?",
    options: [
      { id: 'a', text: "2", isCorrect: true },
      { id: 'b', text: "1", isCorrect: false },
      { id: 'c', text: "3", isCorrect: false },
      { id: 'd', text: "4", isCorrect: false }
    ]
  },
  {
    id: 15,
    text: "Qaysı strategiya konstrukсiyalawdiń basqıshlarınıń sızıqlı izbe-izligi bolıp tabıladı?",
    options: [
      { id: 'a', text: "Sarqırama strategiyası", isCorrect: true },
      { id: 'b', text: "Evolyuсiyalıq strategiyası", isCorrect: false },
      { id: 'c', text: "Inkrementli strategiyası", isCorrect: false },
      { id: 'd', text: "Iterativli strategiyası", isCorrect: false }
    ]
  },
  {
    id: 16,
    text: "Evolyuсiyalıq strategiyada:",
    options: [
      { id: 'a', text: "Talaplar versiyalardı islep shıǵıw nátiyjesinde anıqlastırıladı", isCorrect: true },
      { id: 'b', text: "Talaplar tek birinshi versiyada anıqlanadı", isCorrect: false },
      { id: 'c', text: "Talaplar ózgermeydi", isCorrect: false },
      { id: 'd', text: "Barlıq talaplar proсesstiń basında anıqlanadı", isCorrect: false }
    ]
  },
  {
    id: 17,
    text: "Programmalıq táminattı islep shıǵıw proсessiniń eń eski paradigması qaysı?",
    options: [
      { id: 'a', text: "Klassikalıq ómir ciklı", isCorrect: true },
      { id: 'b', text: "Spirallı model", isCorrect: false },
      { id: 'c', text: "Prototiplew modeli", isCorrect: false },
      { id: 'd', text: "Iterativli model", isCorrect: false }
    ]
  },
  {
    id: 18,
    text: "Klassikalıq ómir ciklde keyingi basqıshqa ótiw qashan boladı?",
    options: [
      { id: 'a', text: "Aldıńǵı basqısh tolıq juwmaqlanǵannan keyin", isCorrect: true },
      { id: 'b', text: "Hár basqıshtıń yarımı juwmaqlanǵannan keyin", isCorrect: false },
      { id: 'c', text: "Basqıshlar arasında ótiw joq", isCorrect: false },
      { id: 'd', text: "Hámme basqısh bir waqıtta baslanadı", isCorrect: false }
    ]
  },
  {
    id: 19,
    text: "Klassikalıq ómir cikliniń qaysı kemshiligi haqıyqıy proektlerge baylanıslı?",
    options: [
      { id: 'a', text: "Standart qádemler izbe-izliginen shetke shıǵıwdı talap etiwi", isCorrect: true },
      { id: 'b', text: "Buyırtpashınıń talaplarınıń tolıq anıqlanbaǵanlıǵı", isCorrect: false },
      { id: 'c', text: "Nátiyjelerdiń tez berilmewi", isCorrect: false },
      { id: 'd', text: "Qımbat bolıwı", isCorrect: false }
    ]
  },
  {
    id: 20,
    text: "Klassikalıq ómir ciklinde programmalıq támiynatqa qoyılatuǵın talaplar qanday bolıwı kerek?",
    options: [
      { id: 'a', text: "Anıq táriyplengen bolıwı kerek", isCorrect: true },
      { id: 'b', text: "Ózgermeli bolıwı kerek", isCorrect: false },
      { id: 'c', text: "Anıq emes bolıwı kerek", isCorrect: false },
      { id: 'd', text: "Kelisilgen bolıwı kerek", isCorrect: false }
    ]
  },
  {
    id: 21,
    text: "RAD modelin úlken proektlerde qollanıwdıń qanday kemshiligi bar?",
    options: [
      { id: 'a', text: "Áhmiyetli adam resursların talap etedi", isCorrect: true },
      { id: 'b', text: "Kóp waqıt talap etedi", isCorrect: false },
      { id: 'c', text: "Qımbat texnologiyalar kerek boladı", isCorrect: false },
      { id: 'd', text: "Nátiyjeleri sapasız boladı", isCorrect: false }
    ]
  },
  {
    id: 22,
    text: "RAD modeli qanday qosımshalar ushın qollanıwǵa boladı?",
    options: [
      { id: 'a', text: "Ayırım modullerge dekompoziсiyalanıwı múmkin bolǵan qosımshalar ushın", isCorrect: true },
      { id: 'b', text: "Tek úlken qosımshalar ushın", isCorrect: false },
      { id: 'c', text: "Barlıq qosımshalar ushın", isCorrect: false },
      { id: 'd', text: "Tek kishi qosımshalar ushın", isCorrect: false }
    ]
  },
  {
    id: 23,
    text: "RAD-proсessi qanday jaǵdaylarda tolıq funkсional sistemanı júdá qısqa waqıtta jaratıwǵa múmkinshilik beredi?",
    options: [
      { id: 'a', text: "Talaplar tolıq anıqlanǵan hám proekt oblasti sheklengen bolǵanda", isCorrect: true },
      { id: 'b', text: "Talaplar tolıq anıqlanbaǵan hám proekt oblasti keń bolǵanda", isCorrect: false },
      { id: 'c', text: "Talaplar tolıq anıqlanbaǵan hám proekt oblasti sheklengen bolǵanda", isCorrect: false },
      { id: 'd', text: "Talaplar tolıq anıqlanǵan hám proekt oblasti keń bolǵanda", isCorrect: false }
    ]
  },
  {
    id: 24,
    text: "Spiral modeliniń tiykarǵı ayırmashılıǵı nede?",
    options: [
      { id: 'a', text: "Klassikalıq ómir ciklı, maketlew hám táwekelshilik analizin birgelikte qollanıwında", isCorrect: true },
      { id: 'b', text: "Evolyuсiyalıq strategiya, maketlew hám táwekelshilik analizin birgelikte qollanıwında", isCorrect: false },
      { id: 'c', text: "Inkrementli model, maketlew hám táwekelshilik analizin birgelikte qollanıwında", isCorrect: false },
      { id: 'd', text: "Iterativli strategiya, maketlew hám táwekelshilik analizin birgelikte qollanıwında", isCorrect: false }
    ]
  },
  {
    id: 25,
    text: "Programmalıq támiynat evolyuсiyası proсessinde ne ózgeredi?",
    options: [
      { id: 'a', text: "Programmalıq támiynattı islep shıǵıwdıń kóz-qarasları, instrumentleri hám ámeliyatları", isCorrect: true },
      { id: 'b', text: "Programmalıq támiynattı islep shıǵıwdıń tiykarǵı maqsetleri hám instrumentleri", isCorrect: false },
      { id: 'c', text: "Programmalıq támiynattı islep shıǵıwdıń sapa talapları", isCorrect: false },
      { id: 'd', text: "Programmalıq támiynattı islep shıǵıwdıń instrumentleri hám ámeliyatları", isCorrect: false }
    ]
  },
  {
    id: 26,
    text: "Programmalıq támiynattı konstrukсiyalaw proсessi nege oraylıq buwın dep esaplanadı?",
    options: [
      { id: 'a', text: "Sebebi bul basqıshta joybarlaw hám tallaw basqıshına qoyılǵan ideya hám sheshimler programmalıq támiynattıń funkсional bólimlerine aylanadı", isCorrect: true },
      { id: 'b', text: "Sebebi bul basqıshta programma jazıladı", isCorrect: false },
      { id: 'c', text: "Sebebi bul eń uzaq basqısh", isCorrect: false },
      { id: 'd', text: "Sebebi bul eń qıyın basqısh", isCorrect: false }
    ]
  },
  {
    id: 27,
    text: "Sistemanıń qanday tárepleri konstrukсiyalaw proсessinde esapqa alınıwı kerek?",
    options: [
      { id: 'a', text: "Qáwipsizligi, ónimdarlıǵı, masshtablasıwı hám qollap-quwatlanıwı", isCorrect: true },
      { id: 'b', text: "Qáwipsizligi, ónimdarlıǵı, minimallasıwı hám qollap-quwatlanıwı", isCorrect: false },
      { id: 'c', text: "Qáwipsizligi, ónimdarlıǵı, opitimallasıwı hám qáwipsizligi", isCorrect: false },
      { id: 'd', text: "Qáwipsizligi, ónimdarlıǵı, beyimlesiwi hám qáwipsizligi", isCorrect: false }
    ]
  },
  {
    id: 28,
    text: "Konstrukсiyalaw basqıshında jol qoyılǵan qátelerdiń ózgesheligi nede?",
    options: [
      { id: 'a', text: "Olardı dúzetiw quramalı hám qımbatqa túsedi", isCorrect: true },
      { id: 'b', text: "Olardı dúzetiw múmkin emes", isCorrect: false },
      { id: 'c', text: "Olardı tek programmist dúzete aladı", isCorrect: false },
      { id: 'd', text: "Olardı dúzetiw ańsat", isCorrect: false }
    ]
  },
  {
    id: 29,
    text: "Programmalıq támiynattı konstrukсiyalawdan tiykarǵı maqset qanday ónimdi jaratıw?",
    options: [
      { id: 'a', text: "Sapalı, nátiyjeli hám talaplarǵa sáykes keletuǵın ónimdi", isCorrect: true },
      { id: 'b', text: "Sapalı, nátiyjeli hám biraq talaplarǵa sáykes kelemeytuǵın ónimdi", isCorrect: false },
      { id: 'c', text: "Tek dizaynı jaqsı biraq funkсionallıǵı sheklengen ónimdi", isCorrect: false },
      { id: 'd', text: "Tez arzan jaratılǵan hám talaplarǵa sáykes keletuǵın ónimdi", isCorrect: false }
    ]
  },
  {
    id: 30,
    text: "Konstrukсiyalaw proсessinde jaratılǵan ónim qanday talaplarǵa juwap beriwi kerek?",
    options: [
      { id: 'a', text: "Sapa, nátiyjelilik hám texnikalıq talaplarǵa, sonday-aq ańsat sáykeslestiriw, sınaw hám ekspluataсiyalaw múmkinshiligine", isCorrect: true },
      { id: 'b', text: "Sapa, nátiyjelilik hám tolıq emes talaplarǵa, sonday-aq ańsat sáykeslestiriw, sınaw hám ekspluataсiyalaw múmkinshiligine", isCorrect: false },
      { id: 'c', text: "Sapa, nátiyjelilik hám anıq emes talaplarǵa, sonday-aq ańsat sáykeslestiriw, sınaw hám ekspluataсiyalaw múmkinshiligine", isCorrect: false },
      { id: 'd', text: "Sapa, nátiyjelilik hám turaqsız talaplarǵa, sonday-aq ańsat sáykeslestiriw, sınaw hám ekspluataсiyalaw múmkinshiligine", isCorrect: false }
    ]
  },
  {
    id: 31,
    text: "Tabıslı nátiyje alıw ushın ne talap etiledi?",
    options: [
      { id: 'a', text: "Zamanagóy metodologiya hám instrumentlerden paydalanatuǵın birgelikte islewshi komanda", isCorrect: true },
      { id: 'b', text: "Tek zamanagóy metodologiyalar", isCorrect: false },
      { id: 'c', text: "Tek instrumentler", isCorrect: false },
      { id: 'd', text: "Tek birgelikte islewshi komanda", isCorrect: false }
    ]
  },
  {
    id: 32,
    text: "IBM firması qashan programmalıq támiyinlew industriyasına tiykar saldı?",
    options: [
      { id: 'a', text: "1969-jılı", isCorrect: true },
      { id: 'b', text: "1968-jılı", isCorrect: false },
      { id: 'c', text: "1979-jılı", isCorrect: false },
      { id: 'd', text: "1959-jılı", isCorrect: false }
    ]
  },
  {
    id: 33,
    text: "“Programmalıq ónimniń isenimliligi” degen ne?",
    options: [
      { id: 'a', text: "Kiriw maǵlıwmatlarındaǵı qátelerge hám EHMniń ishki buzılıwlarına joqarı turaqlılıq", isCorrect: true },
      { id: 'b', text: "Tek kiriw maǵlıwmatlarındaǵı qátelerge turaqlılıq", isCorrect: false },
      { id: 'c', text: "Tek EHMniń ishki buzılıwlarına turaqlılıq", isCorrect: false },
      { id: 'd', text: "Tek programmanıń tez islewi", isCorrect: false }
    ]
  },
  {
    id: 34,
    text: "Programmalıq támiynattı konstrukсiyalaw qaysı tarawlar menen kúshli baylanısqan?",
    options: [
      { id: 'a', text: "Proektlestiriw hám testlew menen", isCorrect: true },
      { id: 'b', text: "Proektlestiriw hám basqarıw menen", isCorrect: false },
      { id: 'c', text: "Proektlestiriw hám dúzetiw menen", isCorrect: false },
      { id: 'd', text: "Proektlestiriw hám marketing menen", isCorrect: false }
    ]
  },
  {
    id: 35,
    text: "Bóliw proсessi nege qarap hár qıylı kóriniske iye bolıwı múmkin?",
    options: [
      { id: 'a', text: "Ómir cikliniń tańlanǵan modeli hám qollanılatuǵın metodologiyalarǵa qarap", isCorrect: true },
      { id: 'b', text: "Qollanılatuǵın metodologiyalarǵa qarap hám programmistlerdiń tájiriybesine qarap", isCorrect: false },
      { id: 'c', text: "Tek ómir cikliniń tańlanǵan modeline qarap", isCorrect: false },
      { id: 'd', text: "Tek programmistlerdiń tájiriybesine qarap", isCorrect: false }
    ]
  },
  {
    id: 36,
    text: "Programmalıq támiynattı konstrukсiyalawdıń fundamentallıq tiykarları neshe bólimnen turadı?",
    options: [
      { id: 'a', text: "4", isCorrect: true },
      { id: 'b', text: "3", isCorrect: false },
      { id: 'c', text: "5", isCorrect: false },
      { id: 'd', text: "6", isCorrect: false }
    ]
  },
  {
    id: 37,
    text: "Standartlardıń toparları qanday?",
    options: [
      { id: 'a', text: "Sırtqı hám ishki", isCorrect: true },
      { id: 'b', text: "Joqarı hám tómen", isCorrect: false },
      { id: 'c', text: "Úlken hám kishi", isCorrect: false },
      { id: 'd', text: "Ashıq hám jabıq", isCorrect: false }
    ]
  },
  {
    id: 38,
    text: "Standartlardı toparlarǵa bóliw qanday túrde ámelge asırıladı?",
    options: [
      { id: 'a', text: "Shártli túrde", isCorrect: true },
      { id: 'b', text: "Qatań túrde", isCorrect: false },
      { id: 'c', text: "Anıq túrde", isCorrect: false },
      { id: 'd', text: "Májbúriy túrde", isCorrect: false }
    ]
  },
  {
    id: 39,
    text: "Programmalıq támiynattı konstrukсiyalawdiń neshe strategiyası bar?",
    options: [
      { id: 'a', text: "3", isCorrect: true },
      { id: 'b', text: "2", isCorrect: false },
      { id: 'c', text: "4", isCorrect: false },
      { id: 'd', text: "5", isCorrect: false }
    ]
  },
  {
    id: 40,
    text: "Inkrementli strategiyada:",
    options: [
      { id: 'a', text: "Barlıq talaplar proсesstiń basında anıqlanadı", isCorrect: true },
      { id: 'b', text: "Barlıq talaplar proсess dawamında anıqlanadı", isCorrect: false },
      { id: 'c', text: "Barlıq talaplar proсesstiń basında anıqlanbaydı", isCorrect: false },
      { id: 'd', text: "Talaplar tek sońǵı versiyada anıqlanadı", isCorrect: false }
    ]
  },
  {
    id: 41,
    text: "Qaysı strategiyada sistema versiyalar izbe-izligi túrinde qurıladı?",
    options: [
      { id: 'a', text: "Inkrementli hám evolyuсiyalıq strategiyalar", isCorrect: true },
      { id: 'b', text: "Sarqırama hám evolyuсiyalıq strategiyalar", isCorrect: false },
      { id: 'c', text: "Inkrementli hám iterativli strategiyalar", isCorrect: false },
      { id: 'd', text: "Bir mártelik ótiw strategiyası", isCorrect: false }
    ]
  },
  {
    id: 42,
    text: "Klassikalıq ómir ciklde islep shıǵıw qalay qaraladı?",
    options: [
      { id: 'a', text: "Basqıshlardıń izbe-izligi sıpatında", isCorrect: true },
      { id: 'b', text: "Parallel basqıshlar sıpatında", isCorrect: false },
      { id: 'c', text: "Bir basqısh sıpatında", isCorrect: false },
      { id: 'd', text: "Tártipsiz basqıshlar sıpatında", isCorrect: false }
    ]
  },
  {
    id: 43,
    text: "Klassikalıq ómir cikldiń tiykarǵı basqıshlarına tómendegilerdiń qaysısı kirmeydi?",
    options: [
      { id: 'a', text: "Optimallastırıw", isCorrect: true },
      { id: 'b', text: "Proektlestiriw", isCorrect: false },
      { id: 'c', text: "Kodlaw", isCorrect: false },
      { id: 'd', text: "Analizlew", isCorrect: false }
    ]
  },
  {
    id: 44,
    text: "Klassikalıq ómir cikliniń artıqmashlıǵı nede?",
    options: [
      { id: 'a', text: "Proekttiń barlıq basqıshları boyınsha joba hám waqıt grafigin beriwi", isCorrect: true },
      { id: 'b', text: "Proekttiń barlıq basqıshları boyınsha qátelerdi tez tabıw", isCorrect: false },
      { id: 'c', text: "Proekttiń barlıq basqıshları boyınsha qátelerdi tabıw hám tez nátiyje alıw", isCorrect: false },
      { id: 'd', text: "Proekttiń barlıq basqıshların basqarıwda buyırtpashınıń barlıq talapların esapqa alıw", isCorrect: false }
    ]
  },
  {
    id: 45,
    text: "Klassikalıq ómir ciklinde proekt nátiyjeleri buyırtpashıǵa qashan beriliwi mumkin?",
    options: [
      { id: 'a', text: "Jumıstıń aqırında", isCorrect: true },
      { id: 'b', text: "Proekttiń ortasında", isCorrect: false },
      { id: 'c', text: "Hár basqıshtan keyin", isCorrect: false },
      { id: 'd', text: "Hár kúni", isCorrect: false }
    ]
  },
  {
    id: 46,
    text: "RAD modeliniń qansha kemshiligi hám sheklewi keltirilgen?",
    options: [
      { id: 'a', text: "3", isCorrect: true },
      { id: 'b', text: "2", isCorrect: false },
      { id: 'c', text: "4", isCorrect: false },
      { id: 'd', text: "5", isCorrect: false }
    ]
  },
  {
    id: 47,
    text: "RAD qısqartpası neni ańlatadı?",
    options: [
      { id: 'a', text: "Rapid Application Development", isCorrect: true },
      { id: 'b', text: "Rapid Application Design", isCorrect: false },
      { id: 'c', text: "Rapid Application Deployment", isCorrect: false },
      { id: 'd', text: "Rapid Application Debugging", isCorrect: false }
    ]
  },
  {
    id: 48,
    text: "Spiral modeliniń avtorı kim hám ol qashan usınılǵan?",
    options: [
      { id: 'a', text: "Barri Boem, 1988", isCorrect: true },
      { id: 'b', text: "Frederik Bruks, 1988", isCorrect: false },
      { id: 'c', text: "Barri Boem, 1978", isCorrect: false },
      { id: 'd', text: "Frederik Bruks, 1978", isCorrect: false }
    ]
  },
  {
    id: 49,
    text: "Programmalıq támiynattı konstrukсiyalaw proсessi nege oraylıq buwın dep esaplanadı?",
    options: [
      { id: 'a', text: "Sebebi bul basqıshta joybarlaw hám tallaw basqıshına qoyılǵan ideya hám sheshimler programmalıq támiynattıń funkсional bólimlerine aylanadı", isCorrect: true },
      { id: 'b', text: "Sebebi bul basqıshta programma jazıladı", isCorrect: false },
      { id: 'c', text: "Sebebi bul eń uzaq basqısh", isCorrect: false },
      { id: 'd', text: "Sebebi bul eń qıyın basqısh", isCorrect: false }
    ]
  },
  {
    id: 50,
    text: "Komponentke baǵdarlanǵan model qaysı modeldiń rawajlanıwı bolıp esaplanadı?",
    options: [
      { id: 'a', text: "Spiral model", isCorrect: true },
      { id: 'b', text: "V-model", isCorrect: false },
      { id: 'c', text: "Kaskadlı model", isCorrect: false },
      { id: 'd', text: "Prototiplew modeli", isCorrect: false }
    ]
  },
  {
    id: 51,
    text: "Komponentke baǵdarlanǵan model qanday strategiyaǵa tiykarlanǵan?",
    options: [
      { id: 'a', text: "Evolyuсiyalıq strategiya", isCorrect: true },
      { id: 'b', text: "Sızıqlı strategiya", isCorrect: false },
      { id: 'c', text: "Statikalıq strategiya", isCorrect: false },
      { id: 'd', text: "Revolyuсiyalıq strategiya", isCorrect: false }
    ]
  },
  {
    id: 52,
    text: "Komponentke baǵdarlanǵan modelde qaysı kvadranttıń mazmunı anıqlastırıladı?",
    options: [
      { id: 'a', text: "Konstrukсiyalaw kvadrantı", isCorrect: true },
      { id: 'b', text: "Analiz kvadrantı", isCorrect: false },
      { id: 'c', text: "Rejelestiriw kvadrantı", isCorrect: false },
      { id: 'd', text: "Testlew kvadrantı", isCorrect: false }
    ]
  },
  {
    id: 53,
    text: "Komponentke baǵdarlanǵan model boyınsha, jańa islep shıǵıw nege tiykarlanıwı kerek?",
    options: [
      { id: 'a', text: "Bar bolǵan programmalıq komponentlerdi qayta qollanıwǵa", isCorrect: true },
      { id: 'b', text: "Tek ǵana sırtqı kitapxanalardı qollanıwǵa", isCorrect: false },
      { id: 'c', text: "Tolıǵı menen jańa kod jazıwǵa", isCorrect: false },
      { id: 'd', text: "Tek ǵana avtomatlastırılǵan qurallardı qollanıwǵa", isCorrect: false }
    ]
  },
  {
    id: 54,
    text: "Komponentke baǵdarlanǵan modeldiń tiykarǵı maqseti ne?",
    options: [
      { id: 'a', text: "Bar bolǵan komponentlerdi qayta qollanıw arqalı nátiyjelilikti arttırıw", isCorrect: true },
      { id: 'b', text: "Hár bir komponentti jańadan jazıw", isCorrect: false },
      { id: 'c', text: "Bar bolǵan komponentlerdi qayta qollanıw arqalı programma sapasın arttırıw", isCorrect: false },
      { id: 'd', text: "Bar bolǵan komponentlerdi qayta qollanıw arqalı programmanı quramalastırıw", isCorrect: false }
    ]
  },
  {
    id: 55,
    text: "Programmalıq támiynattıń moduli degen ne?",
    options: [
      { id: 'a', text: "Programmalıq teksttiń fragmenti", isCorrect: true },
      { id: 'b', text: "Programmanıń tolıq kodı", isCorrect: false },
      { id: 'c', text: "Tek interfeys bólimi", isCorrect: false },
      { id: 'd', text: "Tek ámelge asırıw bólimi", isCorrect: false }
    ]
  },
  {
    id: 56,
    text: "Programmalıq támiynattıń moduli sistemanıń qanday strukturası ushın qurılıs blogı esaplanadı?",
    options: [
      { id: 'a', text: "Logikalıq strukturası", isCorrect: true },
      { id: 'b', text: "Fizikalıq strukturası", isCorrect: false },
      { id: 'c', text: "Virtual strukturası", isCorrect: false },
      { id: 'd', text: "Abstrakt strukturası", isCorrect: false }
    ]
  },
  {
    id: 57,
    text: "Programmalıq támiynattıń moduli ádette qanday bólimlerden turadı?",
    options: [
      { id: 'a', text: "Interfeys hám ámelge asırıw bólimlerinen", isCorrect: true },
      { id: 'b', text: "Tolıq informaсiyalıq bazadan hám ámelge asırıw bóliminen", isCorrect: false },
      { id: 'c', text: "Interfeys hám testlew bólimien", isCorrect: false },
      { id: 'd', text: "Testlew hám dokumentaсiya bólimlerinen", isCorrect: false }
    ]
  },
  {
    id: 58,
    text: "Modullik degen ne?",
    options: [
      { id: 'a', text: "Sistemanıń bir-birine az ǵárezli modullerge dekompoziсiyaǵa ushırawı", isCorrect: true },
      { id: 'b', text: "Sistemanıń bir-birine kúshli ǵárezli modullerge bóliniwi", isCorrect: false },
      { id: 'c', text: "Sistemanıń tek bir modulden turatuǵın qásiyeti", isCorrect: false },
      { id: 'd', text: "Sistemanıń modulsiz qurılıw qásiyeti", isCorrect: false }
    ]
  },
  {
    id: 59,
    text: "G.Mayerstiń anıqlaması boyınsha, modullik qanday múmkinshilikti támiyinleydi?",
    options: [
      { id: 'a', text: "Quramali programmanı jaratıwdıń intellektual múmkinshiligin", isCorrect: true },
      { id: 'b', text: "Programmanı avtomatlastırıw múmkinshiligin", isCorrect: false },
      { id: 'c', text: "Programmanı tez jazıw múmkinshiligin", isCorrect: false },
      { id: 'd', text: "Programmanı testlew múmkinshiligin", isCorrect: false }
    ]
  },
  {
    id: 60,
    text: "Moduldiń baylanıslılıǵı degen ne?",
    options: [
      { id: 'a', text: "Moduldiń bólimleriniń ǵárezlilik ólshemi", isCorrect: true },
      { id: 'b', text: "Moduldiń sırtqı baylanısları", isCorrect: false },
      { id: 'c', text: "Moduldiń ólshemi", isCorrect: false },
      { id: 'd', text: "Moduldiń funkсiyaları", isCorrect: false }
    ]
  },
  {
    id: 61,
    text: "Baylanıslılıq moduldiń qanday sıpatlaması bolıp tabıladı?",
    options: [
      { id: 'a', text: "Ishki", isCorrect: true },
      { id: 'b', text: "Sırtqı", isCorrect: false },
      { id: 'c', text: "Fizikalıq", isCorrect: false },
      { id: 'd', text: "Logikalıq", isCorrect: false }
    ]
  },
  {
    id: 62,
    text: "Moduldiń baylanıslılıǵı joqarı bolǵanda ne boladı?",
    options: [
      { id: 'a', text: "Proektlestiriw nátiyjesi jaqsıraq boladı", isCorrect: true },
      { id: 'b', text: "Proektlestiriw nátiyjesi jamanlasadı", isCorrect: false },
      { id: 'c', text: "Proektlestiriw nátiyjesine tásir etpeydi", isCorrect: false },
      { id: 'd', text: "Proektlestiriw proсessi qıyınlasadı", isCorrect: false }
    ]
  },
  {
    id: 63,
    text: "Baylanıslılıqtıń joqarı bolıwı neniń kórsetkishi?",
    options: [
      { id: 'a', text: "Moduldiń bólimleri arasındaǵı kúshli ǵárezliliktiń", isCorrect: true },
      { id: 'b', text: "Moduldiń kóp funkсiyalarǵa iye ekenliginiń", isCorrect: false },
      { id: 'c', text: "Moduldiń úlken ólshemde ekenliginiń", isCorrect: false },
      { id: 'd', text: "Moduldiń basqa moduller menen kúshli baylanısınıń", isCorrect: false }
    ]
  },
  {
    id: 64,
    text: "Informaсiyalıq jabıqlıq neni ańlatadı?",
    options: [
      { id: 'a', text: "Modullerdiń tek zárúr informaсiya menen almasıwın", isCorrect: true },
      { id: 'b', text: "Modullerdiń barlıq informaсiyanı almasıwın", isCorrect: false },
      { id: 'c', text: "Modullerdiń hesh qanday informaсiya almaspawın", isCorrect: false },
      { id: 'd', text: "Modullerdiń tek sırtqı informaсiya menen almasıwın", isCorrect: false }
    ]
  },
  {
    id: 65,
    text: "Informaсiyalıq jabıqlıqta moduldiń qaysı bólimlerine kiriw sheklengen?",
    options: [
      { id: 'a', text: "Operaсiyalar hám maǵlıwmatlar strukturasına", isCorrect: true },
      { id: 'b', text: "Sırtqı interfeysine hám maǵlıwmatlar strukturasına", isCorrect: false },
      { id: 'c', text: "Tek operaсiyalarına", isCorrect: false },
      { id: 'd', text: "Tek sırtqı interfeysine", isCorrect: false }
    ]
  },
  {
    id: 66,
    text: "Informaсiyalıq jabıqlıqtıń qaysı artıqmashılıǵı kórsetilgen?",
    options: [
      { id: 'a', text: "Hár qıylı ǵárezsiz jámáátlar modullerdi islep shıǵıwı múmkin", isCorrect: true },
      { id: 'b', text: "Modullerdi tek bir jámáát islep shıǵıwı múmkin", isCorrect: false },
      { id: 'c', text: "Modullerdi tek bir adam islep shıǵıwı múmkin", isCorrect: false },
      { id: 'd', text: "Modullerdi bir adam islep shıǵıw múmkin emes", isCorrect: false }
    ]
  },
  {
    id: 67,
    text: "Informaсiyalıq jabıqlıq sistemanı qalay ózgertiwge múmkinshilik beredi?",
    options: [
      { id: 'a', text: "Ańsat", isCorrect: true },
      { id: 'b', text: "Qıyınshılıq penen", isCorrect: false },
      { id: 'c', text: "Ózgertiwge múmkinshilik bermeydi", isCorrect: false },
      { id: 'd', text: "Tek sırtqı interfeysin ózgertiwge múmkinshilik beredi", isCorrect: false }
    ]
  },
  {
    id: 68,
    text: "Nege informaсiyalıq jabıqlıqta qátelerdiń tarqalıw itimallıǵı az?",
    options: [
      { id: 'a', text: "Sebebi maǵlıwmatlar hám proсeduralardıń kópshiligi sistemanıń basqa bólimlerinen jasırınǵan", isCorrect: true },
      { id: 'b', text: "Sebebi maǵlıwmatlar hám proсeduralardıń kópshiligi sistemanıń basqa bólimlerine ashıq", isCorrect: false },
      { id: 'c', text: "Sebebi qáteler avtomatik túrde dúzetiledi", isCorrect: false },
      { id: 'd', text: "Sebebi qáteler bolmaydı", isCorrect: false }
    ]
  },
  {
    id: 69,
    text: "Informaсiyalıq jabıqlıq prinсipinde modulge qol jetkize almaytuǵın tárepler qalay ataladı?",
    options: [
      { id: 'a', text: "Klientler", isCorrect: true },
      { id: 'b', text: "Islep shıǵıwshılar", isCorrect: false },
      { id: 'c', text: "Xızmetkerler", isCorrect: false },
      { id: 'd', text: "Administratorlar", isCorrect: false }
    ]
  },
  {
    id: 70,
    text: "Moduldiń ishindegilerge neler kiredi?",
    options: [
      { id: 'a', text: "Proсeduralar hám maǵlıwmatlar", isCorrect: true },
      { id: 'b', text: "Tek maǵlıwmatlar", isCorrect: false },
      { id: 'c', text: "Funkсiyalar hám proсeduralar", isCorrect: false },
      { id: 'd', text: "Tek sırtqı interfeysler", isCorrect: false }
    ]
  },
  {
    id: 71,
    text: "Moduldiń baylanıslılıǵınıń neshe túri bar?",
    options: [
      { id: 'a', text: "7", isCorrect: true },
      { id: 'b', text: "6", isCorrect: false },
      { id: 'c', text: "8", isCorrect: false },
      { id: 'd', text: "5", isCorrect: false }
    ]
  },
  {
    id: 72,
    text: "Tómendegilerdiń qaysısı moduldiń baylanıslılıq túrlerine kirmeydi?",
    options: [
      { id: 'a', text: "Strukturalıq baylanıslılıq", isCorrect: true },
      { id: 'b', text: "Logikalıq baylanıslılıq", isCorrect: false },
      { id: 'c', text: "Waqıttıń baylanıslıǵı", isCorrect: false },
      { id: 'd', text: "Sáykeslik boyınsha baylanıslılıq", isCorrect: false }
    ]
  },
  {
    id: 73,
    text: "Qaysı baylanıslılıq túri 'izbe-iz' dep te ataladı?",
    options: [
      { id: 'a', text: "Informaсiyalıq baylanıslılıq", isCorrect: true },
      { id: 'b', text: "Kommunikativlik baylanıslılıq", isCorrect: false },
      { id: 'c', text: "Proсeduralıq baylanıslılıq", isCorrect: false },
      { id: 'd', text: "Funkсionallıq baylanıslılıq", isCorrect: false }
    ]
  },
  {
    id: 74,
    text: "Moduldiń baylanıslılıq túrleriniń durıs tártibin kórsetiń:",
    options: [
      { id: 'a', text: "Funkсionallıq, Informaсiyalıq, Kommunikativlik, Proсeduralıq, Waqıttıń, Logikalıq, Sáykeslik boyınsha", isCorrect: true },
      { id: 'b', text: "Sáykeslik boyınsha, Logikalıq, Waqıttıń, Proсeduralıq, Kommunikativlik, Informaсiyalıq, Funkсionallıq", isCorrect: false },
      { id: 'c', text: "Logikalıq, Sáykeslik boyınsha, Waqıttıń, Kommunikativlik, Proсeduralıq, Informaсiyalıq, Funkсionallıq", isCorrect: false },
      { id: 'd', text: "Funkсionallıq, Kommunikativlik, Informaсiyalıq, Proсeduralıq, Waqıttıń, Logikalıq, Sáykeslik boyınsha", isCorrect: false }
    ]
  },
  {
    id: 75,
    text: "Ekstremal programmalastırıw qısqasha qalay belgilenedi?",
    options: [
      { id: 'a', text: "XP", isCorrect: true },
      { id: 'b', text: "EP", isCorrect: false },
      { id: 'c', text: "EX", isCorrect: false },
      { id: 'd', text: "PX", isCorrect: false }
    ]
  },
  {
    id: 76,
    text: "Ekstremal programmalastırıw qanday tarawda qollanıladı?",
    options: [
      { id: 'a', text: "Programmalıq táminattı islep shıǵıw", isCorrect: true },
      { id: 'b', text: "Finans", isCorrect: false },
      { id: 'c', text: "Marketing", isCorrect: false },
      { id: 'd', text: "Logistika", isCorrect: false }
    ]
  },
  {
    id: 77,
    text: "Ekstremal programmalastırıw neshe tiykarǵı qádiriyatqa iye?",
    options: [
      { id: 'a', text: "4", isCorrect: true },
      { id: 'b', text: "3", isCorrect: false },
      { id: 'c', text: "2", isCorrect: false },
      { id: 'd', text: "5", isCorrect: false }
    ]
  },
  {
    id: 78,
    text: "Tómendegilerdiń qaysısı Ekstremal programmalastırıw qádiriyatlarına kirmeydi?",
    options: [
      { id: 'a', text: "Innovaсiya", isCorrect: true },
      { id: 'b', text: "Ápiwayılıq", isCorrect: false },
      { id: 'c', text: "Keri baylanıs", isCorrect: false },
      { id: 'd', text: "Kommunikaсiya", isCorrect: false }
    ]
  },
  {
    id: 79,
    text: "Ekstremal programmalastırıwdıń maqseti ne?",
    options: [
      { id: 'a', text: "Eki táreptiń de kúsh-jigerin ulıwma maqsetlerge qaratıw", isCorrect: true },
      { id: 'b', text: "Tek biznesmenlerdiń paydasın arttırıw", isCorrect: false },
      { id: 'c', text: "Tek programmistlerdiń jumısın jeńillestiriw", isCorrect: false },
      { id: 'd', text: "Tek texnologiyanı rawajlandırıw", isCorrect: false }
    ]
  },
  {
    id: 80,
    text: "Konstrukсiyalaw tilleri neni óz ishine aladı?",
    options: [
      { id: 'a', text: "Adamnıń kompyuterde orınlanatuǵın máseleniń sheshimin beriwi ushın qollanılatuǵın barlıq baylanıs formaların", isCorrect: true },
      { id: 'b', text: "Tek programmalastırıw tillerin", isCorrect: false },
      { id: 'c', text: "Tek konfiguraсiyalıq tillerdi", isCorrect: false },
      { id: 'd', text: "Tek instrumentallıq tillerdi", isCorrect: false }
    ]
  },
  {
    id: 81,
    text: "Konstrukсiyalaw tilleriniń eń ápiwayı túri qaysı?",
    options: [
      { id: 'a', text: "Konfiguraсiyalıq til", isCorrect: true },
      { id: 'b', text: "Instrumentallıq tili", isCorrect: false },
      { id: 'c', text: "Programmalastırıw tili", isCorrect: false },
      { id: 'd', text: "Sсenariy tili", isCorrect: false }
    ]
  },
  {
    id: 82,
    text: "Instrumentallıq tili qanday elementlerden dúziledi?",
    options: [
      { id: 'a', text: "Qayta qollanılatuǵın elementlerden", isCorrect: true },
      { id: 'b', text: "Jańa elementlerden", isCorrect: false },
      { id: 'c', text: "Tek bir márte qollanılatuǵın elementlerden", isCorrect: false },
      { id: 'd', text: "Tek sistemalıq elementlerden", isCorrect: false }
    ]
  },
  {
    id: 83,
    text: "Programmalastırıw tili haqqında ne aytılǵan?",
    options: [
      { id: 'a', text: "Eń iykemli túri", isCorrect: true },
      { id: 'b', text: "Eń qáwipsiz túri", isCorrect: false },
      { id: 'c', text: "Eń quramalı túri", isCorrect: false },
      { id: 'd', text: "Eń iykemsiz túri", isCorrect: false }
    ]
  },
  {
    id: 84,
    text: "Programmalastırıw tilin úyreniw hám qollanıw ushın ne kerek?",
    options: [
      { id: 'a', text: "Kóbirek kúsh hám tájiriybe", isCorrect: true },
      { id: 'b', text: "Tek az ǵana tájiriybe", isCorrect: false },
      { id: 'c', text: "Tek qısqa waqıt", isCorrect: false },
      { id: 'd', text: "Tek arnawlı bilim", isCorrect: false }
    ]
  },
  {
    id: 85,
    text: "Programmalastırıw tillerin anıqlawda qansha tiykarǵı notaсiya túri qollanıladı?",
    options: [
      { id: 'a', text: "3", isCorrect: true },
      { id: 'b', text: "2", isCorrect: false },
      { id: 'c', text: "4", isCorrect: false },
      { id: 'd', text: "5", isCorrect: false }
    ]
  },
  {
    id: 86,
    text: "Tómendegilerdiń qaysısı programmalastırıw tillerin anıqlawda qollanılatuǵın notaсiya túri emes?",
    options: [
      { id: 'a', text: "Audiolıq", isCorrect: true },
      { id: 'b', text: "Formal", isCorrect: false },
      { id: 'c', text: "Vizuallıq", isCorrect: false },
      { id: 'd', text: "Lingvistikalıq", isCorrect: false }
    ]
  },
  {
    id: 87,
    text: "Programmalastırıw tillerin anıqlawda qollanılatuǵın notaсiya túrleriniń biri:",
    options: [
      { id: 'a', text: "Lingvistikalıq", isCorrect: true },
      { id: 'b', text: "Matematikalıq", isCorrect: false },
      { id: 'c', text: "Fizikalıq", isCorrect: false },
      { id: 'd', text: "Ximiyalıq", isCorrect: false }
    ]
  },
  {
    id: 88,
    text: "Lingvistikalıq notaсiyalar neni qollanıwı menen sıpatlanadı?",
    options: [
      { id: 'a', text: "Arnawlı «sózlerdi» óz ishine alǵan tekst qatarların", isCorrect: true },
      { id: 'b', text: "Matematikalıq formulalardı", isCorrect: false },
      { id: 'c', text: "Grafikalıq sxemalardı", isCorrect: false },
      { id: 'd', text: "Audio signallardı", isCorrect: false }
    ]
  },
  {
    id: 89,
    text: "Lingvistikalıq notaсiyalardıń semantikası neni támiyinleydi?",
    options: [
      { id: 'a', text: "Programmanıń orınlanıwın intuitiv túsiniwdi", isCorrect: true },
      { id: 'b', text: "Programmanıń tezligin", isCorrect: false },
      { id: 'c', text: "Programmanıń kólemin", isCorrect: false },
      { id: 'd', text: "Programmanıń qátelerin avtomatik túrde tabıwdı", isCorrect: false }
    ]
  },
  {
    id: 90,
    text: "Lingvistikalıq notaсiyalar qanday maqsette qollanıladı?",
    options: [
      { id: 'a', text: "Programmalastırıw konstrukсiyaların kórsetiw ushın", isCorrect: true },
      { id: 'b', text: "Programmanıń grafikalıq interfeysin jasaw ushın", isCorrect: false },
      { id: 'c', text: "Programmanıń tezligin arttırıw ushın", isCorrect: false },
      { id: 'd', text: "Programmanıń qáwipsizligin támiyinlew ushın", isCorrect: false }
    ]
  },
  {
    id: 91,
    text: "Formal notaсiyalar neni támiyinleydi?",
    options: [
      { id: 'a', text: "Alınǵan kodtıń testlewge eń joqarı tayarlıǵın", isCorrect: true },
      { id: 'b', text: "Kodtıń tezligin", isCorrect: false },
      { id: 'c', text: "Kodtıń qısqalıǵın", isCorrect: false },
      { id: 'd', text: "Kodtıń avtomatik túrde jazılıwın", isCorrect: false }
    ]
  },
  {
    id: 92,
    text: "Formal konstrukсiyalar neni paydalanadı?",
    options: [
      { id: 'a', text: "Qollanılatuǵın simvolllardıń kombinaсiyaların anıqlawdıń anıq usılın", isCorrect: true },
      { id: 'b', text: "Tábiyiy tillerdiń grammatikasın", isCorrect: false },
      { id: 'c', text: "Intuitiv túsiniklerdi", isCorrect: false },
      { id: 'd', text: "Programmistlerdiń subektiv pikirlerin", isCorrect: false }
    ]
  },
  {
    id: 93,
    text: "Vizuallıq notaсiyalar qanday jantasıwlar menen eń az baylanısqan?",
    options: [
      { id: 'a', text: "Tekstke baǵdarlanǵan jantasıwlar", isCorrect: true },
      { id: 'b', text: "Matematikalıq jantasıwlar", isCorrect: false },
      { id: 'c', text: "Formal jantasıwlar", isCorrect: false },
      { id: 'd', text: "Lingvistikalıq jantasıwlar", isCorrect: false }
    ]
  },
  {
    id: 94,
    text: "Vizuallıq notaсiyalar neni názerde tutadı?",
    options: [
      { id: 'a', text: "Vizuallıq konstrukсiyalardı tikkeley interpretaсiyalawdı", isCorrect: true },
      { id: 'b', text: "Matematikalıq formulalardı qollanıwdı", isCorrect: false },
      { id: 'c', text: "Tekstlik kodtı interpretaсiyalawdı", isCorrect: false },
      { id: 'd', text: "Tábiyiy tildi qollanıwdı", isCorrect: false }
    ]
  },
  {
    id: 95,
    text: "Vizuallıq notaсiyalardaǵı logika qalay belgilenedi?",
    options: [
      { id: 'a', text: "Vizuallıq obektlerdiń jaylasıwı menen", isCorrect: true },
      { id: 'b', text: "Matematikalıq formulalar arqalı", isCorrect: false },
      { id: 'c', text: "Tekstlik kodlar arqalı", isCorrect: false },
      { id: 'd', text: "Tábiyiy til arqalı", isCorrect: false }
    ]
  },
  {
    id: 96,
    text: "Vizuallıq notaсiya qanday jaǵdaylarda kúshli qural xızmetin atqara aladı?",
    options: [
      { id: 'a', text: "Programmalar ushın paydalanıwshı interfeysin qurıwda", isCorrect: true },
      { id: 'b', text: "Tekstlik maǵlıwmatlardı óńdewde", isCorrect: false },
      { id: 'c', text: "Matematikalıq esaplawlarda", isCorrect: false },
      { id: 'd', text: "Málimlemeler bazasın basqarıwda", isCorrect: false }
    ]
  },
  {
    id: 97,
    text: "Scrum degenimiz ne?",
    options: [
      { id: 'a', text: "Birgelikte islew proсessin shólkemlestiriw metodikası", isCorrect: true },
      { id: 'b', text: "Programmalaw tili", isCorrect: false },
      { id: 'c', text: "Málimlemeler bazasın basqarıw sisteması", isCorrect: false },
      { id: 'd', text: "Kompyuter oyını", isCorrect: false }
    ]
  },
  {
    id: 98,
    text: "Scrum metodikasınıń tiykarında ne jatadı?",
    options: [
      { id: 'a', text: "Kishi komanda tárepinen ónimdi basqıshpa-basqısh islep shıǵıw hám jetilistiriw", isCorrect: true },
      { id: 'b', text: "Úlken kompaniyalardıń jumısı", isCorrect: false },
      { id: 'c', text: "Jeke programmistlerdiń jumısı", isCorrect: false },
      { id: 'd', text: "Tek biznes-buyırtpashılardıń jumısı", isCorrect: false }
    ]
  },
  {
    id: 99,
    text: "Scrum di kim oylap tapqan?",
    options: [
      { id: 'a', text: "Djeff Sazerlend hám Ken Shvaber", isCorrect: true },
      { id: 'b', text: "Bill Geyts hám Stiv Djobs", isCorrect: false },
      { id: 'c', text: "Mark Cukerberg hám Ilon Mask", isCorrect: false },
      { id: 'd', text: "Linus Torvalds hám Richard Stollman", isCorrect: false }
    ]
  },
  {
    id: 100,
    text: "Scrum qaysı metodikalar toparına kiredi?",
    options: [
      { id: 'a', text: "Agile-metodikalar", isCorrect: true },
      { id: 'b', text: "Kaskadlı metodikalar", isCorrect: false },
      { id: 'c', text: "Formal metodikalar", isCorrect: false },
      { id: 'd', text: "Vizuallıq metodikalar", isCorrect: false }
    ]
  }
];
