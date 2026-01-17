
import { Question } from './types';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Sistemalı programmalastırıwdıń eń tiykarǵı anıqlaması neni bildiredi?",
    options: [
      { id: 'a', text: "Resurslardı basqarıwshı programmalıq támiynat.", isCorrect: true },
      { id: 'b', text: "Paydalanıwshıǵa baǵdarlanǵan hám kóbinese grafik interfeysli qollanba programmalardı jaratıw.", isCorrect: false },
      { id: 'c', text: "Tek ǵana úlken maǵlıwmatlar bazası menen islesiw.", isCorrect: false },
      { id: 'd', text: "Joqarı dárejeli programma tilleri interfeysin jazıw hám olardı tarmaqqa biriktiriw.", isCorrect: false }
    ]
  },
  {
    id: 2,
    text: "Operacion sistemalardaǵı sistemalı programmalıq támiynat roli qaysı?",
    options: [
      { id: 'a', text: "Apparatlıq támiynat penen óz-ara tásir.", isCorrect: true },
      { id: 'b', text: "Tek ǵana jańa grafik interfeysti usınıs etiw.", isCorrect: false },
      { id: 'c', text: "Maǵlıwmatlardı tek ǵana aralıqtan jiberiw.", isCorrect: false },
      { id: 'd', text: "Programmalardı tek ǵana interpretaciyalaw hám tezligin sheklew.", isCorrect: false }
    ]
  },
  {
    id: 3,
    text: "Sistemalı programmalastırıwda C tili ne ushın áhmiyetli?",
    options: [
      { id: 'a', text: "Tómengi dárejeli funkciyalarǵa kirisiw.", isCorrect: true },
      { id: 'b', text: "Ol eń jańa hám qolaylı til bolǵanı ushın.", isCorrect: false },
      { id: 'c', text: "Ol tek ǵana tarmaqta qollanıladı.", isCorrect: false },
      { id: 'd', text: "Ol virtual yadtı basqara almaydı.", isCorrect: false }
    ]
  },
  {
    id: 4,
    text: "Low-Level (Tómengi dárejeli) dep atalıwınıń sebebi nede?",
    options: [
      { id: 'a', text: "Apparatlıq támiynatqa jaqın islew.", isCorrect: true },
      { id: 'b', text: "Keshlewshi mexanizmlerin bilmegenligi ushın.", isCorrect: false },
      { id: 'c', text: "Tek ǵana tarmaq baylanısın qollanıw.", isCorrect: false },
      { id: 'd', text: "Hár dayım qátelerdi shıǵarıwı sebepli.", isCorrect: false }
    ]
  },
  {
    id: 5,
    text: "Sistemalı programmalastırıwdıń tiykarǵı maqseti nede?",
    options: [
      { id: 'a', text: "OS resursların nátiyjeli basqarıw.", isCorrect: true },
      { id: 'b', text: "Maǵlıwmatlar bazasın basqarıwǵa járdem beriw.", isCorrect: false },
      { id: 'c', text: "Tek ǵana joqarı dárejeli programmalastırıw.", isCorrect: false },
      { id: 'd', text: "Internet brauzerlerin optimallastırıw hám hızmet kórsetiw.", isCorrect: false }
    ]
  },
  {
    id: 6,
    text: "Processlerdi basqarıw hám yadtı bólistiriw sıyaqlı tiykarǵı wazıypalar qaysı bólimge kiredi?",
    options: [
      { id: 'a', text: "Kernel (Yad)", isCorrect: true },
      { id: 'b', text: "User Application (Paydalanıwshı qollanbası)", isCorrect: false },
      { id: 'c', text: "Maǵlıwmatlar bazası", isCorrect: false },
      { id: 'd', text: "Tarmaq protokolları", isCorrect: false }
    ]
  },
  {
    id: 7,
    text: "System Calls (Sistema shaqırıwları) ni qollanıw ne ushın zárúr?",
    options: [
      { id: 'a', text: "Qáwipsiz yad funksiyalarına kirisiw.", isCorrect: true },
      { id: 'b', text: "Tek ǵana maǵlıwmatlardı arxivlew.", isCorrect: false },
      { id: 'c', text: "Tek ǵana grafik interfeysti kórsetiw.", isCorrect: false },
      { id: 'd', text: "Tek ǵana dinamikalıq yadtı bosatıw hám tarmaqqa shıǵıw.", isCorrect: false }
    ]
  },
  {
    id: 8,
    text: "Kernel (Yad) yad maydanın Paydalanıwshı yad maydanınan qalay ajıratadı?",
    options: [
      { id: 'a', text: "Process rejimleri arqalı.", isCorrect: true },
      { id: 'b', text: "Tek ǵana process atları arqalı.", isCorrect: false },
      { id: 'c', text: "Fayl sistemasında bólek direktoriyalar jaratıw.", isCorrect: false },
      { id: 'd', text: "Tarmaq adresin ózgertiw arqalı.", isCorrect: false }
    ]
  },
  {
    id: 9,
    text: "Process ID (PID) hám Kirisiw Huqıqları sıyaqlı tiykarǵı maǵlıwmatlar qaysı bólimde saqlanadı?",
    options: [
      { id: 'a', text: "Operaciyalıq Sistema Yadı.", isCorrect: true },
      { id: 'b', text: "Fizikalıq disk.", isCorrect: false },
      { id: 'c', text: "Tarmaq routeri.", isCorrect: false },
      { id: 'd', text: "Printer drayveri.", isCorrect: false }
    ]
  },
  {
    id: 10,
    text: "Sistemalı programmalastırıw bulıtlı esaplawlarda ne ushın áhmiyetli?",
    options: [
      { id: 'a', text: "Virtualizaciyalaw texnologiyaların basqarıw.", isCorrect: true },
      { id: 'b', text: "Tek ǵana web-brauzerlerdi islep shıǵıw.", isCorrect: false },
      { id: 'c', text: "Tek ǵana súwretlerdi redaktorlaw.", isCorrect: false },
      { id: 'd', text: "Tek ǵana elektr energiyasın basqarıw hám esap-kitap islew.", isCorrect: false }
    ]
  },
  {
    id: 11,
    text: "Faylǵa tiyisli metadata (huqıqlar, ólshemi) neniń ishinde saqlanadı?",
    options: [
      { id: 'a', text: "Inode", isCorrect: true },
      { id: 'b', text: "Superblok", isCorrect: false },
      { id: 'c', text: "Maǵlıwmatlar blogı", isCorrect: false },
      { id: 'd', text: "Disk buferi", isCorrect: false }
    ]
  },
  {
    id: 12,
    text: "Fayl sistemasınıń qaysı bólimi fayllar hám direktoriyalardıń strukturasın saqlaydı?",
    options: [
      { id: 'a', text: "Inode", isCorrect: true },
      { id: 'b', text: "Superblok", isCorrect: false },
      { id: 'c', text: "Kirisiw buferi", isCorrect: false },
      { id: 'd', text: "Process kestesi", isCorrect: false }
    ]
  },
  {
    id: 13,
    text: "Fayl operaciyaların tezlestiriw ushın qollanılatuǵın mexanizm qaysı?",
    options: [
      { id: 'a', text: "Keshlewshi hám Buferlew", isCorrect: true },
      { id: 'b', text: "Processlerdiń uyqılawı", isCorrect: false },
      { id: 'c', text: "Tek ǵana DMA", isCorrect: false },
      { id: 'd', text: "Tarmaq baylanısın óshiriw", isCorrect: false }
    ]
  },
  {
    id: 14,
    text: "Linux-ta fayldı ashıw ushın qollanılatuǵın sistema shaqırıǵı qaysı?",
    options: [
      { id: 'a', text: "open()", isCorrect: true },
      { id: 'b', text: "read()", isCorrect: false },
      { id: 'c', text: "write()", isCorrect: false },
      { id: 'd', text: "close()", isCorrect: false }
    ]
  },
  {
    id: 15,
    text: "Fayldıń aktuallıq orının ózgertiw ushın qollanılatuǵın sistema shaqırıǵı qaysı?",
    options: [
      { id: 'a', text: "lseek()", isCorrect: true },
      { id: 'b', text: "fseek()", isCorrect: false },
      { id: 'c', text: "move_file()", isCorrect: false },
      { id: 'd', text: "change_offset()", isCorrect: false }
    ]
  },
  {
    id: 16,
    text: "Hard Link (Qattı silteme) neni ańlatadı?",
    options: [
      { id: 'a', text: "Bir Inode-qa bir neshe silteme.", isCorrect: true },
      { id: 'b', text: "Tek basqa bir fayl atın saqlaytuǵın fayl.", isCorrect: false },
      { id: 'c', text: "Tek tarmaq arqalı bólistiriletuǵın fayl.", isCorrect: false },
      { id: 'd', text: "Tek jazıw huqıǵı bar faylǵa sıltaw.", isCorrect: false }
    ]
  },
  {
    id: 17,
    text: "Fayl sistemasındaǵı Direktoriyalar texnikalıq jaqtan qalay kórilgen?",
    options: [
      { id: 'a', text: "Fayl atları hám Inode nomerleri jazılǵan arnawlı fayllar.", isCorrect: true },
      { id: 'b', text: "Tek ǵana tarmaq adreslerin saqlaydı.", isCorrect: false },
      { id: 'c', text: "Tek processlerdiń sanın saqlaydı.", isCorrect: false },
      { id: 'd', text: "Tek processor registrleriniń maǵlıwmatların saqlaytuǵın jayı.", isCorrect: false }
    ]
  },
  {
    id: 18,
    text: "OS diskten maǵlıwmatlardı oqıw ushın qaysı birlikti qollanadı?",
    options: [
      { id: 'a', text: "Disk Blokları", isCorrect: true },
      { id: 'b', text: "Bayt", isCorrect: false },
      { id: 'c', text: "Bit", isCorrect: false },
      { id: 'd', text: "Millisekund", isCorrect: false }
    ]
  },
  {
    id: 19,
    text: "Synchronous I/O (Sinxron Kirgiziw/Shıǵarıw) neni bildiredi?",
    options: [
      { id: 'a', text: "Operaciya tamamlanǵanǵa shekem programmanıń kútip turıwı.", isCorrect: true },
      { id: 'b', text: "I/O tamamlanıwın kutpey, birden atqarıwdı dawam ettiriw.", isCorrect: false },
      { id: 'c', text: "Tek ǵana tarmaq arqalı maǵlıwmat almasıw.", isCorrect: false },
      { id: 'd', text: "Tek ǵana bir process islew shárayatı.", isCorrect: false }
    ]
  },
  {
    id: 20,
    text: "Fayl sistemasınıń Journaling (Jurnal júritiw) mexanizmi ne ushın qollanıladı?",
    options: [
      { id: 'a', text: "Sistemalıq qátelerden qorǵaw.", isCorrect: true },
      { id: 'b', text: "Fayldıń ólshemin ózgertiw ushın.", isCorrect: false },
      { id: 'c', text: "Tek ǵana maǵlıwmatlardı sıǵıw.", isCorrect: false },
      { id: 'd', text: "Tek ǵana processlerdi uyqlatıw.", isCorrect: false }
    ]
  },
  {
    id: 21,
    text: "Processorlar isleytuǵın eń tiykarǵı birlik qaysı?",
    options: [
      { id: 'a', text: "Buyrıqlar (Instructions)", isCorrect: true },
      { id: 'b', text: "Operaciyalıq sistema versiyası", isCorrect: false },
      { id: 'c', text: "Fayl atı", isCorrect: false },
      { id: 'd', text: "Tarmaq protokolları hám soketler.", isCorrect: false }
    ]
  },
  {
    id: 22,
    text: "CPU-ǵa I/O qurılmasınan yamasa yadqa kirisiwdegi qáteni bildiretuǵın signallar qaysı?",
    options: [
      { id: 'a', text: "Úzilisler (Interrupts)", isCorrect: true },
      { id: 'b', text: "Process ID", isCorrect: false },
      { id: 'c', text: "Soket nomeri", isCorrect: false },
      { id: 'd', text: "Fayl deskriptorı", isCorrect: false }
    ]
  },
  {
    id: 23,
    text: "I/O qurılmasınıń Processor hám OS aralasuwınsız Yadqa kirisiwine múmkinshilik beretuǵın mexanizm qaysı?",
    options: [
      { id: 'a', text: "DMA (Direct Memory Access)", isCorrect: true },
      { id: 'b', text: "CPU Registerleri", isCorrect: false },
      { id: 'c', text: "Process Kestesi", isCorrect: false },
      { id: 'd', text: "Semaphor", isCorrect: false }
    ]
  },
  {
    id: 24,
    text: "Processor registrlerınıń tiykarǵı wazıypası nede?",
    options: [
      { id: 'a', text: "Maǵlıwmatlar hám adreslerdi waqtınsha saqlaw.", isCorrect: true },
      { id: 'b', text: "Tek ǵana fayl maǵlıwmatların arxivlew.", isCorrect: false },
      { id: 'c', text: "Tek ǵana tarmaq baǵdarlawın basqarıw.", isCorrect: false },
      { id: 'd', text: "Fayl sistemasınıń tolıq kóshirmesin saqlaw.", isCorrect: false }
    ]
  },
  {
    id: 25,
    text: "Little-Endian hám Big-Endian neni ańlatadı?",
    options: [
      { id: 'a', text: "Yadta baytlar tártibin saqlaw usılı.", isCorrect: true },
      { id: 'b', text: "Tarmaq tezligin ólshew birligi.", isCorrect: false },
      { id: 'c', text: "Fayl sistemasınıń ólshemi.", isCorrect: false },
      { id: 'd', text: "Processlerdiń kólemi.", isCorrect: false }
    ]
  },
  {
    id: 26,
    text: "MMIO (Memory-Mapped I/O) neni bildiredi?",
    options: [
      { id: 'a', text: "I/O qurılma registrlerine yad adresleri arqalı kirisiw.", isCorrect: true },
      { id: 'b', text: "Tek ǵana fayllardı oqıw.", isCorrect: false },
      { id: 'c', text: "Tek ǵana tarmaqqa shıǵıw.", isCorrect: false },
      { id: 'd', text: "Processlerdi uyqlatıw.", isCorrect: false }
    ]
  },
  {
    id: 27,
    text: "CPU Keshi ne ushın qollanıladı?",
    options: [
      { id: 'a', text: "Kirisiw tezligin keskin asırıw.", isCorrect: true },
      { id: 'b', text: "Tek ǵana qátelerdi dúzetiw.", isCorrect: false },
      { id: 'c', text: "Tek ǵana tarmaqtaǵı trafikti basqarıw.", isCorrect: false },
      { id: 'd', text: "Tek ǵana disk fragmentaciyasın joq etiw.", isCorrect: false }
    ]
  },
  {
    id: 28,
    text: "Program Counter registri ne ushın zárúr?",
    options: [
      { id: 'a', text: "Kelesi buyrıqtıń yad adresin saqlaw.", isCorrect: true },
      { id: 'b', text: "Fayldıń aktuallıq ólshemin saqlaw.", isCorrect: false },
      { id: 'c', text: "Processlerdiń sanın esaplaw.", isCorrect: false },
      { id: 'd', text: "Tarmaq paketin qayta jiberiw ushın.", isCorrect: false }
    ]
  },
  {
    id: 29,
    text: "Adreslew rejimleri Processorǵa qanday múmkinshilik beredi?",
    options: [
      { id: 'a', text: "Operandlar adresin túrli usıllar menen anıqlaw.", isCorrect: true },
      { id: 'b', text: "Tek ǵana fayl sistemasın oqıw.", isCorrect: false },
      { id: 'c', text: "Tek ǵana semaforlardı qollanıw.", isCorrect: false },
      { id: 'd', text: "Tek ǵana tarmaq IP adresin ózgertiw.", isCorrect: false }
    ]
  },
  {
    id: 30,
    text: "TLB ne ushın qollanıladı?",
    options: [
      { id: 'a', text: "Adres awdarmaların tezlestiriw.", isCorrect: true },
      { id: 'b', text: "Tek ǵana fayl atların saqlaw.", isCorrect: false },
      { id: 'c', text: "Tek ǵana tarmaq soketlerin basqarıw.", isCorrect: false },
      { id: 'd', text: "Tek ǵana óz-ara tosıw (Deadlock) máselelerin sheshiw.", isCorrect: false }
    ]
  },
  {
    id: 31,
    text: "Linux-ta jańa process jaratıw ushın tiykarǵı sistema shaqırıǵı qaysı?",
    options: [
      { id: 'a', text: "fork()", isCorrect: true },
      { id: 'b', text: "exec()", isCorrect: false },
      { id: 'c', text: "wait()", isCorrect: false },
      { id: 'd', text: "exit()", isCorrect: false }
    ]
  },
  {
    id: 32,
    text: "Processke basqa programmanı orınlawǵa ózgertiw ushın qaysı sistema shaqırıǵı qollanıladı?",
    options: [
      { id: 'a', text: "exec()", isCorrect: true },
      { id: 'b', text: "fork()", isCorrect: false },
      { id: 'c', text: "signal()", isCorrect: false },
      { id: 'd', text: "kill()", isCorrect: false }
    ]
  },
  {
    id: 33,
    text: "Ana Processtiń balası Processi atqarıwın tamamlawsın dep kútiwi ushın qaysı sistema shaqırıǵı qollanıladı?",
    options: [
      { id: 'a', text: "wait()", isCorrect: true },
      { id: 'b', text: "sleep()", isCorrect: false },
      { id: 'c', text: "pause()", isCorrect: false },
      { id: 'd', text: "alarm()", isCorrect: false }
    ]
  },
  {
    id: 34,
    text: "Processler Arasındaǵı Óz-ara Tásir (IPC) ushın eń ápiwayı hám bir tárepleme mexanizm qaysı?",
    options: [
      { id: 'a', text: "Pipe (Truba)", isCorrect: true },
      { id: 'b', text: "Shared Memory", isCorrect: false },
      { id: 'c', text: "Message Queue", isCorrect: false },
      { id: 'd', text: "Socket", isCorrect: false }
    ]
  },
  {
    id: 35,
    text: "Processke waqıya haqqında xabar beriw ushın qollanılatuǵın mexanizm qaysı?",
    options: [
      { id: 'a', text: "Signal", isCorrect: true },
      { id: 'b', text: "Mutex", isCorrect: false },
      { id: 'c', text: "Semaphore", isCorrect: false },
      { id: 'd', text: "TLB", isCorrect: false }
    ]
  },
  {
    id: 36,
    text: "Process óz yad maydanındaǵı maǵlıwmatlarǵa qáwipsiz túrde kirisiwdi qalay qadaǵalaydı?",
    options: [
      { id: 'a', text: "Sistema shaqırıqları arqalı.", isCorrect: true },
      { id: 'b', text: "Tek ǵana tarmaq adresin ózgertiw.", isCorrect: false },
      { id: 'c', text: "Fayl sistemasınıń atın ózgertiw.", isCorrect: false },
      { id: 'd', text: "Tek ǵana CPU-nıń tezligin tómenletiw.", isCorrect: false }
    ]
  },
  {
    id: 37,
    text: "Linux-taǵı kill buyrıǵı tiykarınan ne isleytuǵın?",
    options: [
      { id: 'a', text: "Process ID-ge Signal jiberiw.", isCorrect: true },
      { id: 'b', text: "Kompyuterdi óshiriw.", isCorrect: false },
      { id: 'c', text: "Fayl sistemasın óshiriw.", isCorrect: false },
      { id: 'd', text: "Tarmaq baylanısın toqtatıw.", isCorrect: false }
    ]
  },
  {
    id: 38,
    text: "Process yad maydanınıń bir bólimin basqa processler menen bólistiriw ushın qollanılatuǵın eń tez IPC mexanizmi qaysı?",
    options: [
      { id: 'a', text: "Shared Memory", isCorrect: true },
      { id: 'b', text: "Pipe", isCorrect: false },
      { id: 'c', text: "Message Queue", isCorrect: false },
      { id: 'd', text: "Signal", isCorrect: false }
    ]
  },
  {
    id: 39,
    text: "Kernel Space hám User Space arasındaǵı óz-ara tásir tiykarınan ne arqalı ámelge asırıladı?",
    options: [
      { id: 'a', text: "Sistema shaqırıqları", isCorrect: true },
      { id: 'b', text: "Tek ǵana fayl oqıw", isCorrect: false },
      { id: 'c', text: "Tek ǵana IP adresin ózgertiw", isCorrect: false },
      { id: 'd', text: "Process ID nomerlew", isCorrect: false }
    ]
  },
  {
    id: 40,
    text: "Process óz orınlanıwın waqıtsha toqtatıw ushın qaysı sistema shaqırıǵın qollana aladı (belgili bir múddetke)?",
    options: [
      { id: 'a', text: "sleep()", isCorrect: true },
      { id: 'b', text: "fork()", isCorrect: false },
      { id: 'c', text: "exec()", isCorrect: false },
      { id: 'd', text: "wait()", isCorrect: false }
    ]
  },
  {
    id: 41,
    text: "Kóp potoklı programmalastırıwda eń kóp qollanılatuǵın sinxronizaciyalaw primitivi qaysı?",
    options: [
      { id: 'a', text: "Mutex", isCorrect: true },
      { id: 'b', text: "DMA", isCorrect: false },
      { id: 'c', text: "TLB", isCorrect: false },
      { id: 'd', text: "Program Counter", isCorrect: false }
    ]
  },
  {
    id: 42,
    text: "Critical Section (Kritikalıq Bólim) neni ańlatadı?",
    options: [
      { id: 'a', text: "Ortaq resursqa kirisiwshi kod bólimi.", isCorrect: true },
      { id: 'b', text: "Programmanıń tek basındaǵı bólimi.", isCorrect: false },
      { id: 'c', text: "Tek ǵana fayl operaciyaların qamtıytuǵın bólim.", isCorrect: false },
      { id: 'd', text: "Tek ǵana tarmaq konfiguraciyasın ózgertiwshi bólim.", isCorrect: false }
    ]
  },
  {
    id: 43,
    text: "Semaphore neni basqarıw ushın qollanılatuǵın qural?",
    options: [
      { id: 'a', text: "Sheklengen sanlı resurslarǵa kirisiwdi basqarıw.", isCorrect: true },
      { id: 'b', text: "Tek ǵana yad adreslerin ózgertiw.", isCorrect: false },
      { id: 'c', text: "Tek ǵana fayl atların sanaw.", isCorrect: false },
      { id: 'd', text: "Tek ǵana tarmaq paketlerin sıǵıw.", isCorrect: false }
    ]
  },
  {
    id: 44,
    text: "Deadlock shárayatın sheshiwdiń eń nátiyjeli usılı qaysı?",
    options: [
      { id: 'a', text: "Aldın alıw (Prevention).", isCorrect: true },
      { id: 'b', text: "Tek ǵana Process ID-di ózgertiw.", isCorrect: false },
      { id: 'c', text: "Tek ǵana fayl huqıqların ózgertiw.", isCorrect: false },
      { id: 'd', text: "Tek ǵana TCP protokolın qollanıw.", isCorrect: false }
    ]
  },
  {
    id: 45,
    text: "Banker's Algorithm tiykarınan qanday wazıypa ushın qollanıladı?",
    options: [
      { id: 'a', text: "Resurslardı qáwipsiz bólisiw.", isCorrect: true },
      { id: 'b', text: "Tek ǵana tarmaq maǵlıwmatların shifrlaw.", isCorrect: false },
      { id: 'c', text: "Tek ǵana fayl sistemasın formatlaw.", isCorrect: false },
      { id: 'd', text: "Tek ǵana virtual yad ólshemin esaplaw.", isCorrect: false }
    ]
  },
  {
    id: 46,
    text: "Processlerdiń Processordan nátiyjeli paydalanıwın támiyinleytuǵın bólim qaysı?",
    options: [
      { id: 'a', text: "Process Rejeleshtiriwshisi", isCorrect: true },
      { id: 'b', text: "Fayl Basqarıwshısı", isCorrect: false },
      { id: 'c', text: "Tarmaq Drayveri", isCorrect: false },
      { id: 'd', text: "Yad Allokatorı", isCorrect: false }
    ]
  },
  {
    id: 47,
    text: "Potok (Thread) Process-ten tiykarǵı ayırmashılıǵı nede?",
    options: [
      { id: 'a', text: "Yad maydanın bólisiw.", isCorrect: true },
      { id: 'b', text: "Tek ǵana tarmaq qollanbaları qollanadı.", isCorrect: false },
      { id: 'c', text: "Processler tezirek jaratıladı.", isCorrect: false },
      { id: 'd', text: "Potoklar tek ǵana kompressorlar qollanadı.", isCorrect: false }
    ]
  },
  {
    id: 48,
    text: "Potoklardıń CPU-dan paydalanıw tártibin basqarıw ushın qollanılatuǵın algoritm qaysı?",
    options: [
      { id: 'a', text: "Rejeleshtiriw algoritmi", isCorrect: true },
      { id: 'b', text: "Dinamikalıq yadtı bólisiw algoritmi", isCorrect: false },
      { id: 'c', text: "Fayl atın sanaw algoritmi", isCorrect: false },
      { id: 'd', text: "Tarmaq IP adresin beriw algoritmi", isCorrect: false }
    ]
  },
  {
    id: 49,
    text: "Busy Waiting neni bildiredi?",
    options: [
      { id: 'a', text: "CPU waqıtın biykarǵa jumsaw.", isCorrect: true },
      { id: 'b', text: "Potoktıń ulıwma islemewi.", isCorrect: false },
      { id: 'c', text: "Fayl operaciyasınıń tamamlanıwın kutpey, birge islew.", isCorrect: false },
      { id: 'd', text: "Tarmaq arqalı úziliksiz maǵlıwmat almasıw.", isCorrect: false }
    ]
  },
  {
    id: 50,
    text: "Sinxronizaciyalawdı talap etpeytuǵın resurs qaysı?",
    options: [
      { id: 'a', text: "Potoktıń jergilikli ózgeriwshileri.", isCorrect: true },
      { id: 'b', text: "Ortaq yad maydanı.", isCorrect: false },
      { id: 'c', text: "Global ózgeriwshiler.", isCorrect: false },
      { id: 'd', text: "Fayl sisteması.", isCorrect: false }
    ]
  },
  {
    id: 51,
    text: "Spinlock ne ushın qollanıladı?",
    options: [
      { id: 'a', text: "Qısqa múddetli qulıplawlar ushın.", isCorrect: true },
      { id: 'b', text: "Tek ǵana uzaq múddetli bloklawlar ushın.", isCorrect: false },
      { id: 'c', text: "Fayl sistemasın arxivlew ushın.", isCorrect: false },
      { id: 'd', text: "Tarmaq baylanısın úziliksiz túrde saqlaw.", isCorrect: false }
    ]
  },
  {
    id: 52,
    text: "Processler arası baylanıstı (IPC) sinxronizaciyalaw ushın qaysı qural qollanıladı?",
    options: [
      { id: 'a', text: "Semaforlar hám Mutexler.", isCorrect: true },
      { id: 'b', text: "Tek ǵana DMA kontrollerleri.", isCorrect: false },
      { id: 'c', text: "Tek ǵana Program Counter.", isCorrect: false },
      { id: 'd', text: "Tek ǵana CPU Keshi.", isCorrect: false }
    ]
  },
  {
    id: 53,
    text: "Reentrancy (Qayta Kirisiw múmkinshiligi) neni ańlatadı?",
    options: [
      { id: 'a', text: "Bir neshe potok tárepinen qáwipsiz shaqırıw.", isCorrect: true },
      { id: 'b', text: "Tek ǵana yad allokaciyasında.", isCorrect: false },
      { id: 'c', text: "Tek ǵana fayl sistemasında.", isCorrect: false },
      { id: 'd', text: "Tek ǵana tarmaq IP adreslerinde.", isCorrect: false }
    ]
  },
  {
    id: 54,
    text: "Process Jobası (Process Scheduling) tiykarǵı maqseti nede?",
    options: [
      { id: 'a', text: "Processlardan nátiyjeli paydalanıw.", isCorrect: true },
      { id: 'b', text: "Tek ǵana faylǵa kirisiwdi qadaǵalaw.", isCorrect: false },
      { id: 'c', text: "Tek ǵana dinamikalıq yadtı bólisiw.", isCorrect: false },
      { id: 'd', text: "Tek ǵana tarmaq paketlerin shifrlaw.", isCorrect: false }
    ]
  },
  {
    id: 55,
    text: "Round Robin jobasın dúziw algoritmi qanday isleydi?",
    options: [
      { id: 'a', text: "Teń waqıt bólimleri berip, aylanba tártipte islew.", isCorrect: true },
      { id: 'b', text: "Eń qısqa process birinshi orınlanadı.", isCorrect: false },
      { id: 'c', text: "Eń uzaq process birinshi orınlanadı.", isCorrect: false },
      { id: 'd', text: "Tek ǵana tek tarmaq processlerin iske túsiredi.", isCorrect: false }
    ]
  },
  {
    id: 56,
    text: "C tilinde free() funksiyası ne isleytuǵın?",
    options: [
      { id: 'a', text: "Bólisken yadtı qaytarıp beriw.", isCorrect: true },
      { id: 'b', text: "Tek ǵana fayldı óshiriw.", isCorrect: false },
      { id: 'c', text: "Processlerdi toqtatıw.", isCorrect: false },
      { id: 'd', text: "Tarmaq baylanısın óshiriw.", isCorrect: false }
    ]
  },
  {
    id: 57,
    text: "Virtual Yad mexanizminiń tiykarǵı bólegi qaysı?",
    options: [
      { id: 'a', text: "Virtual adreslerdi Fizikalıq adreslerge awdarıw.", isCorrect: true },
      { id: 'b', text: "Tek ǵana CPU-nıń tezligin arttırıw.", isCorrect: false },
      { id: 'c', text: "Tek ǵana fayl atlarını sanaw.", isCorrect: false },
      { id: 'd', text: "Tek ǵana tarmaq maǵlıwmatlarını saqlaw.", isCorrect: false }
    ]
  },
  {
    id: 58,
    text: "Virtual yadtı Fizikalıq yadqa awdarıwda qollanılatuǵın mexanizm qaysı?",
    options: [
      { id: 'a', text: "Paging hám Page Table", isCorrect: true },
      { id: 'b', text: "Tek ǵana DMA", isCorrect: false },
      { id: 'c', text: "Tek ǵana Mutex", isCorrect: false },
      { id: 'd', text: "Tek ǵana Inode", isCorrect: false }
    ]
  },
  {
    id: 59,
    text: "Page Fault shárayatı neni bildiredi?",
    options: [
      { id: 'a', text: "Virtual bettiń diskte jaylasıwı yaki yadta joqlıǵı.", isCorrect: true },
      { id: 'b', text: "Process óz yad maydanına kirisiwge urınıw.", isCorrect: false },
      { id: 'c', text: "Tek ǵana fayl jazıw qátesi.", isCorrect: false },
      { id: 'd', text: "Tek ǵana tarmaq adresiniń qátesi.", isCorrect: false }
    ]
  },
  {
    id: 60,
    text: "Yad Allokatorı tiykarǵı wazıypası nede?",
    options: [
      { id: 'a', text: "Dinamikalıq yad sorawların basqarıw.", isCorrect: true },
      { id: 'b', text: "Tek ǵana processlerdi basqarıw.", isCorrect: false },
      { id: 'c', text: "Tek ǵana Kirgiziw/Shıǵarıw operaciyaların orınlaw.", isCorrect: false },
      { id: 'd', text: "Tek ǵana tarmaq paketlerin jıynaw.", isCorrect: false }
    ]
  },
  {
    id: 61,
    text: "Dinamikalıq yadtı bólisiw nátiyjesinde payda bolǵan kishi bos bloklar qalay ataladı?",
    options: [
      { id: 'a', text: "Fragmentaciya", isCorrect: true },
      { id: 'b', text: "Paging", isCorrect: false },
      { id: 'c', text: "Swapping", isCorrect: false },
      { id: 'd', text: "Caching", isCorrect: false }
    ]
  },
  {
    id: 62,
    text: "Processlerdiń bir-biriniń yad maydanına qáwipsiz kirisiwine jol qoymaw ushın qollanılatuǵın mexanizm qaysı?",
    options: [
      { id: 'a', text: "Yad Qorǵawı (Memory Protection)", isCorrect: true },
      { id: 'b', text: "DMA", isCorrect: false },
      { id: 'c', text: "Soketler", isCorrect: false },
      { id: 'd', text: "Fayl huqıqları", isCorrect: false }
    ]
  },
  {
    id: 63,
    text: "Yadqa kirisiwdi tezlestiriw ushın qollanılatuǵın apparatlıq kesh qaysı?",
    options: [
      { id: 'a', text: "TLB (Translation Lookaside Buffer)", isCorrect: true },
      { id: 'b', text: "CPU L1 Kesh", isCorrect: false },
      { id: 'c', text: "Disk Buferi", isCorrect: false },
      { id: 'd', text: "Process Kestesi", isCorrect: false }
    ]
  },
  {
    id: 64,
    text: "Swapping (Almastırıw) neni ańlatadı?",
    options: [
      { id: 'a', text: "Processlerdiń yadın disk hám RAM arasında almasıw.", isCorrect: true },
      { id: 'b', text: "Yad bólimlerin birlestiriw.", isCorrect: false },
      { id: 'c', text: "Tek ǵana fayllardı arxivlew.", isCorrect: false },
      { id: 'd', text: "Virtual yad adreslerin ózgertiw.", isCorrect: false }
    ]
  },
  {
    id: 65,
    text: "Yad blogın bólisiw ushın qollanılatuǵın First-Fit algoritmi qaysı?",
    options: [
      { id: 'a', text: "Birinshi sáykes keletuǵın bos bólimdi tabıw.", isCorrect: true },
      { id: 'b', text: "Eń jaqsı sáykes keletuǵın bólimdi tabıw.", isCorrect: false },
      { id: 'c', text: "Eń jaman sáykes keletuǵın bólimdi tabıw.", isCorrect: false },
      { id: 'd', text: "Háreketli sáykes keletuǵın bólimdi tabıw.", isCorrect: false }
    ]
  },
  {
    id: 66,
    text: "Stack hám Heap yad maydanları arasındaǵı tiykarǵı ayırmashılıq nede?",
    options: [
      { id: 'a', text: "Stack avtomatikalıq basqarıladı, al Heap qol menen basqarıladı.", isCorrect: true },
      { id: 'b', text: "Stack úlkenlew, al Heap kishilew.", isCorrect: false },
      { id: 'c', text: "Stack tez, al Heap áste.", isCorrect: false },
      { id: 'd', text: "Stack tek ǵana processor ushın qollanıladı.", isCorrect: false }
    ]
  },
  {
    id: 67,
    text: "Thrashing shárayatı neni bildiredi?",
    options: [
      { id: 'a', text: "OS tiykarǵı waqıtın disk hám RAM arasında bet almastırıwǵa jumsawı.", isCorrect: true },
      { id: 'b', text: "Processlerdiń tez islew shárayatı.", isCorrect: false },
      { id: 'c', text: "Tek ǵana yad allokaciyası.", isCorrect: false },
      { id: 'd', text: "Faylǵa kirisiwdi qadaǵalaw.", isCorrect: false }
    ]
  },
  {
    id: 68,
    text: "Yadtiń qáwipsizlik dáslebinde Valid/Invalid biti qaysı mekemede ornalasqan?",
    options: [
      { id: 'a', text: "Page Table", isCorrect: true },
      { id: 'b', text: "CPU registri", isCorrect: false },
      { id: 'c', text: "Fayl deskriptorı", isCorrect: false },
      { id: 'd', text: "Tarmaq buferi", isCorrect: false }
    ]
  },
  {
    id: 69,
    text: "Copy-on-Write (CoW) mexanizmi ne ushın qollanıladı?",
    options: [
      { id: 'a', text: "Processler arasında yad betlerin nátiyjeli bólisiw.", isCorrect: true },
      { id: 'b', text: "Tek ǵana fayldı oqıw.", isCorrect: false },
      { id: 'c', text: "Mutexlerdi sinxronizaciyalaw.", isCorrect: false },
      { id: 'd', text: "Tarmaq baylanısın optimallastırıw.", isCorrect: false }
    ]
  },
  {
    id: 70,
    text: "Process yad maydanınıń virtual adresiniń tómenki shegarasın belgileytuǵın mexanizm qaysı?",
    options: [
      { id: 'a', text: "Base Register", isCorrect: true },
      { id: 'b', text: "Limit Register", isCorrect: false },
      { id: 'c', text: "Stack Pointer", isCorrect: false },
      { id: 'd', text: "Program Counter", isCorrect: false }
    ]
  },
  {
    id: 71,
    text: "Drayverler yadǵa qosılatuǵın hám islew waqtında júklenip, óshiriliwi múmkin bolǵan birlik qaysı?",
    options: [
      { id: 'a', text: "Kernel Module", isCorrect: true },
      { id: 'b', text: "Fayl sistemasınıń ózi", isCorrect: false },
      { id: 'c', text: "Process ID", isCorrect: false },
      { id: 'd', text: "Tarmaq IP adresleri", isCorrect: false }
    ]
  },
  {
    id: 72,
    text: "Linux drayverler arxitekturasında, drayverlerge apparatlıq támiynatqa kirisiw múmkinshiligin beretuǵın tiykarǵı bólim qaysı?",
    options: [
      { id: 'a', text: "Kernel Space", isCorrect: true },
      { id: 'b', text: "User Space", isCorrect: false },
      { id: 'c', text: "Shell", isCorrect: false },
      { id: 'd', text: "Grafik interfeys", isCorrect: false }
    ]
  },
  {
    id: 73,
    text: "Kirgiziw-shıǵarıw drayverleriniń tiykarǵı islew principlerinen biri neni qamtıydı?",
    options: [
      { id: 'a', text: "Úzilislerdi basqarıw (Interrupt handling).", isCorrect: true },
      { id: 'b', text: "Yad allokaciyası.", isCorrect: false },
      { id: 'c', text: "Processlerdi rejeleshtiriw.", isCorrect: false },
      { id: 'd', text: "Fayl atlarını ózgertiw.", isCorrect: false }
    ]
  },
  {
    id: 74,
    text: "Drayverlerde ioctl funksiyası ne ushın qollanıladı?",
    options: [
      { id: 'a', text: "Arnawlı Kirgiziw/Shıǵarıw basqarıwları ushın.", isCorrect: true },
      { id: 'b', text: "Tek ǵana fayldı oqıw.", isCorrect: false },
      { id: 'c', text: "Mutexlerdi jaratıw.", isCorrect: false },
      { id: 'd', text: "Virtual yadtı bólistiriw.", isCorrect: false }
    ]
  },
  {
    id: 75,
    text: "Qurılma drayveri nege yad rejiminde islewdi talap etedi?",
    options: [
      { id: 'a', text: "Apparatlıq támiynat registrlerine tuwrıdan-tuwrı kirisiw ushın.", isCorrect: true },
      { id: 'b', text: "Tek ǵana tez faylǵa kirisiw.", isCorrect: false },
      { id: 'c', text: "Processlerdiń yadın bólisiw.", isCorrect: false },
      { id: 'd', text: "Tarmaq paketlerin tez jiberiw.", isCorrect: false }
    ]
  },
  {
    id: 76,
    text: "Qurılma drayveri paydalanıwshı processleri menen baylanısıw ushın neni qollana aladı?",
    options: [
      { id: 'a', text: "File Descriptors (Device files) arqalı.", isCorrect: true },
      { id: 'b', text: "Tek ǵana CPU registrlerin.", isCorrect: false },
      { id: 'c', text: "Tek ǵana TLB-nı.", isCorrect: false },
      { id: 'd', text: "Tek ǵana DMA-nı.", isCorrect: false }
    ]
  },
  {
    id: 77,
    text: "MMIO mexanizmi drayverde nege múmkinshilik beredi?",
    options: [
      { id: 'a', text: "I/O qurılmalarınıń registrlerine yad adresleri arqalı kirisiw.", isCorrect: true },
      { id: 'b', text: "Tek ǵana disk fragmentaciyasın joq etiw.", isCorrect: false },
      { id: 'c', text: "Processlerdiń sinxronizaciyası.", isCorrect: false },
      { id: 'd', text: "Tarmaq protokolların ózgertiw.", isCorrect: false }
    ]
  },
  {
    id: 78,
    text: "Qurılma drayverlerin sazlaw procesi qalay ataladı?",
    options: [
      { id: 'a', text: "Debugging", isCorrect: true },
      { id: 'b', text: "Rejeleshtiriw", isCorrect: false },
      { id: 'c', text: "Fragmentaciyalaw", isCorrect: false },
      { id: 'd', text: "Almastırıw", isCorrect: false }
    ]
  },
  {
    id: 79,
    text: "Drayverdiń qurılmadan maǵlıwmatlardı alıwı ushın kútiwdiń eń nátiyjeli usılı qaysı?",
    options: [
      { id: 'a', text: "Úzilislerdi qollanıw (Interrupt-driven I/O).", isCorrect: true },
      { id: 'b', text: "Úziliksiz túrde soraw jiberiw (Polling).", isCorrect: false },
      { id: 'c', text: "Tek ǵana Mutex qollanıw.", isCorrect: false },
      { id: 'd', text: "Tek ǵana sleep() shaqırıw.", isCorrect: false }
    ]
  },
  {
    id: 80,
    text: "Qaysı qurılmalar Kirgiziw/Shıǵarıw operaciyaları ushın DMA-nı qollanadı?",
    options: [
      { id: 'a', text: "Joqarı tezliktegi qurılmalar (Diskler, Tarmaq kartaları).", isCorrect: true },
      { id: 'b', text: "Tek ǵana klaviaturalar.", isCorrect: false },
      { id: 'c', text: "Tek ǵana procesler.", isCorrect: false },
      { id: 'd', text: "Tek ǵana kishi yadlar.", isCorrect: false }
    ]
  },
  {
    id: 81,
    text: "Tarmaqtaǵı isenimli, baylanısqa baǵdarlanǵan protokol qaysı?",
    options: [
      { id: 'a', text: "TCP", isCorrect: true },
      { id: 'b', text: "UDP", isCorrect: false },
      { id: 'c', text: "ICMP", isCorrect: false },
      { id: 'd', text: "IP", isCorrect: false }
    ]
  },
  {
    id: 82,
    text: "Socket programmalastırıwda neni bildiredi?",
    options: [
      { id: 'a', text: "Tarmaqqa kirisiw ushın OS interfeysi (End-point).", isCorrect: true },
      { id: 'b', text: "Tek ǵana fayldıń atı.", isCorrect: false },
      { id: 'c', text: "Tek ǵana yad bólimi.", isCorrect: false },
      { id: 'd', text: "Tek ǵana CPU registri.", isCorrect: false }
    ]
  },
  {
    id: 83,
    text: "Serverdiń belgili bir portta baylanıslardı tıńlawı ushın qollanatuǵın tarmaq shaqırıǵı qaysı?",
    options: [
      { id: 'a', text: "bind() hám listen()", isCorrect: true },
      { id: 'b', text: "connect()", isCorrect: false },
      { id: 'c', text: "send()", isCorrect: false },
      { id: 'd', text: "recv()", isCorrect: false }
    ]
  },
  {
    id: 84,
    text: "Klient hám Server arasındaǵı TCP baylanısın ornatıw procesi qalay ataladı?",
    options: [
      { id: 'a', text: "Three-Way Handshake", isCorrect: true },
      { id: 'b', text: "Simple Connection", isCorrect: false },
      { id: 'c', text: "Four-Way Closing", isCorrect: false },
      { id: 'd', text: "UDP Protocol", isCorrect: false }
    ]
  },
  {
    id: 85,
    text: "Non-blocking I/O neni bildiredi?",
    options: [
      { id: 'a', text: "Kútiwsiz, operaciya bitpese de birden qaytıw.", isCorrect: true },
      { id: 'b', text: "Processlerdiń tolıq uyqılawı.", isCorrect: false },
      { id: 'c', text: "Tek ǵana DMA qollanıw.", isCorrect: false },
      { id: 'd', text: "Yad allokaciyasın toqtatıw.", isCorrect: false }
    ]
  },
  {
    id: 86,
    text: "Tarmaq baylanısın qabıl etken Processke jańa soket deskriptorın qaytaratuǵın tarmaq shaqırıǵı qaysı?",
    options: [
      { id: 'a', text: "accept()", isCorrect: true },
      { id: 'b', text: "listen()", isCorrect: false },
      { id: 'c', text: "close()", isCorrect: false },
      { id: 'd', text: "select()", isCorrect: false }
    ]
  },
  {
    id: 87,
    text: "Port Nomeri ne ushın qollanıladı?",
    options: [
      { id: 'a', text: "Processler yaki Xızmetler arasında ajıratıw.", isCorrect: true },
      { id: 'b', text: "Tek ǵana kompyuter atın saqlaw.", isCorrect: false },
      { id: 'c', text: "Tek ǵana fayl ólshemin esaplaw.", isCorrect: false },
      { id: 'd', text: "Tek ǵana virtual adreslerdi ózgertiw.", isCorrect: false }
    ]
  },
  {
    id: 88,
    text: "Kóp klientler menen bir waqıtta jumıs isleytuǵın serverdi jaratıwdıń tiykarǵı usılı qaysı?",
    options: [
      { id: 'a', text: "Multiplexing (select/poll) yaki kóp potoklılıq.", isCorrect: true },
      { id: 'b', text: "Tek ǵana bir process penen islew.", isCorrect: false },
      { id: 'c', text: "Fayl sistemasın óshiriw.", isCorrect: false },
      { id: 'd', text: "DMA-nı toqtatıw.", isCorrect: false }
    ]
  },
  {
    id: 89,
    text: "Byte Ordering máseleleri ne ushın áhmiyetli?",
    options: [
      { id: 'a', text: "Maǵlıwmatlardı túrli arxitekturalar arasında durıs túsiniw.", isCorrect: true },
      { id: 'b', text: "Tek ǵana fayl huqıqların ózgertiw.", isCorrect: false },
      { id: 'c', text: "Tek ǵana processlerdi rejeleshtiriw.", isCorrect: false },
      { id: 'd', text: "Tek ǵana yad fragmentaciyasın joq etiw.", isCorrect: false }
    ]
  },
  {
    id: 90,
    text: "Tarmaq maǵlıwmatlarını socket arqalı jiberiw ushın qollanılatuǵın sistema shaqırıǵı qaysı?",
    options: [
      { id: 'a', text: "send() yaki write()", isCorrect: true },
      { id: 'b', text: "recv()", isCorrect: false },
      { id: 'c', text: "bind()", isCorrect: false },
      { id: 'd', text: "listen()", isCorrect: false }
    ]
  },
  {
    id: 91,
    text: "Fayl deskriptorları sanın qadaǵalaw ushın qaysı mexanizm qollanıladı?",
    options: [
      { id: 'a', text: "I/O Multiplexing (select, poll, epoll).", isCorrect: true },
      { id: 'b', text: "Tek ǵana malloc()", isCorrect: false },
      { id: 'c', text: "Tek ǵana fork()", isCorrect: false },
      { id: 'd', text: "Tek ǵana wait()", isCorrect: false }
    ]
  },
  {
    id: 92,
    text: "Half-Close (Yarım Jabıw) neni bildiredi?",
    options: [
      { id: 'a', text: "Bir baǵıtta maǵlıwmat jiberiwdi toqtatıw, biraq qabıllawdı dawam ettiriw.", isCorrect: true },
      { id: 'b', text: "Fayl sistemasınıń ózi óshiriliwi.", isCorrect: false },
      { id: 'c', text: "Mutex-tiń biykar etiliwi.", isCorrect: false },
      { id: 'd', text: "DMA-nıń óshiriliwi.", isCorrect: false }
    ]
  },
  {
    id: 93,
    text: "TCP/IP protokol jıynaǵınıń Internet Qabatında tiykarǵı rol oynaytuǵın protokol qaysı?",
    options: [
      { id: 'a', text: "IP", isCorrect: true },
      { id: 'b', text: "TCP", isCorrect: false },
      { id: 'c', text: "UDP", isCorrect: false },
      { id: 'd', text: "HTTP", isCorrect: false }
    ]
  },
  {
    id: 94,
    text: "Tarmaqta eń ápiwayı, tez, biraq isenimsiz maǵlıwmat almasıwdı támiyinleytuǵın protokol qaysı?",
    options: [
      { id: 'a', text: "UDP", isCorrect: true },
      { id: 'b', text: "TCP", isCorrect: false },
      { id: 'c', text: "ICMP", isCorrect: false },
      { id: 'd', text: "FTP", isCorrect: false }
    ]
  },
  {
    id: 95,
    text: "Loopback Interface ne ushın qollanıladı?",
    options: [
      { id: 'a', text: "Bir kompyuter ishinde tarmaq baylanısın sınaw ushın (127.0.0.1).", isCorrect: true },
      { id: 'b', text: "Tek ǵana sırtqı tarmaqqa shıǵıw.", isCorrect: false },
      { id: 'c', text: "Fayl sistemasın óshiriw.", isCorrect: false },
      { id: 'd', text: "Processlerdi uyqlatıw.", isCorrect: false }
    ]
  },
  {
    id: 96,
    text: "Processorlar hám yadtıń islew principlerın qaysı programmalastırıw tili jaqsı súwretleydi?",
    options: [
      { id: 'a', text: "Assembler yaki C tili.", isCorrect: true },
      { id: 'b', text: "Python", isCorrect: false },
      { id: 'c', text: "SQL", isCorrect: false },
      { id: 'd', text: "HTML", isCorrect: false }
    ]
  },
  {
    id: 97,
    text: "Load Time Linking neni bildiredi?",
    options: [
      { id: 'a', text: "Orınlanıwshı fayl yadqa júklengen waqıtta sırtqı funkciyalardıń adreslerin belgilew.", isCorrect: true },
      { id: 'b', text: "Programmayıń islep atırǵan waqıtta yadtan bóleklenıw.", isCorrect: false },
      { id: 'c', text: "Tek ǵana fayldı oqıw.", isCorrect: false },
      { id: 'd', text: "Tek ǵana tarmaq adresin ózgertiw.", isCorrect: false }
    ]
  },
  {
    id: 98,
    text: "OS Processlerdiń yad maydanın ajıratıw ushın qaysı apparatlıq támiynattan paydalanadı?",
    options: [
      { id: 'a', text: "MMU (Memory Management Unit)", isCorrect: true },
      { id: 'b', text: "Hard Disk", isCorrect: false },
      { id: 'c', text: "Tarmaq Kartası", isCorrect: false },
      { id: 'd', text: "Klaviatura", isCorrect: false }
    ]
  },
  {
    id: 99,
    text: "Segmentaciya neni ańlatadı?",
    options: [
      { id: 'a', text: "Yadtı logikalıq birlikler (kod, maǵlıwmat, stack) boyınsha bólisiw.", isCorrect: true },
      { id: 'b', text: "Tek ǵana diskte isleytuǵın.", isCorrect: false },
      { id: 'c', text: "Tezirek isleytuǵın mexanizm.", isCorrect: false },
      { id: 'd', text: "Tek ǵana tarmaq ushın.", isCorrect: false }
    ]
  },
  {
    id: 100,
    text: "Linux-ta process óz-ózin óshiriwi ushın qollanılatuǵın sistema shaqırıǵı qaysı?",
    options: [
      { id: 'a', text: "_exit() yaki exit()", isCorrect: true },
      { id: 'b', text: "fork()", isCorrect: false },
      { id: 'c', text: "exec()", isCorrect: false },
      { id: 'd', text: "wait()", isCorrect: false }
    ]
  },
  {
    id: 101,
    text: "IPC tiykarǵı maqseti nede?",
    options: [
      { id: 'a', text: "Processler arasında maǵlıwmat almasıw.", isCorrect: true },
      { id: 'b', text: "Tek ǵana yad fragmentaciyasın joq etiw.", isCorrect: false },
      { id: 'c', text: "Tek ǵana fayl huqıqların qadaǵalaw.", isCorrect: false },
      { id: 'd', text: "Tek ǵana DMA-nı óshiriw.", isCorrect: false }
    ]
  },
  {
    id: 102,
    text: "FIFO jobasın dúziw algoritminiń ózgesheligi nede?",
    options: [
      { id: 'a', text: "Kelgen tártipte, úzilislersiz orınlanıw.", isCorrect: true },
      { id: 'b', text: "Eń qısqa process birinshi orınlanadı.", isCorrect: false },
      { id: 'c', text: "Processlerge waqıt bólimleri beriledi.", isCorrect: false },
      { id: 'd', text: "Tek ǵana tarmaq processleri orınlanadı.", isCorrect: false }
    ]
  },
  {
    id: 103,
    text: "Priority Scheduling neni bildiredi?",
    options: [
      { id: 'a', text: "Eń joqarı áhmiyetliligi bar process birinshi Processordan paydalanadı.", isCorrect: true },
      { id: 'b', text: "Processlar teń waqıt bólimleri menen orınlanadı.", isCorrect: false },
      { id: 'c', text: "Processlar kelgen tártipte orınlanadı.", isCorrect: false },
      { id: 'd', text: "Processlar tek ǵana yadta isleytuǵın.", isCorrect: false }
    ]
  },
  {
    id: 104,
    text: "Aging mexanizmi qaysı máselelerdi sheshiw ushın qollanıladı?",
    options: [
      { id: 'a', text: "Ash qalıwdı (Starvation) boldırmaw.", isCorrect: true },
      { id: 'b', text: "Yad allokaciyasınıń nátiyjesizligin.", isCorrect: false },
      { id: 'c', text: "Fayl sistemasınıń qátelerin.", isCorrect: false },
      { id: 'd', text: "Tarmaq baylanısınıń toqtawın.", isCorrect: false }
    ]
  },
  {
    id: 105,
    text: "Spinlock ne ushın qollanıladı?",
    options: [
      { id: 'a', text: "Qısqa múddetli qulıplawlar ushın.", isCorrect: true },
      { id: 'b', text: "Ol kóp waqıt CPU-nı toqtatadı.", isCorrect: false },
      { id: 'c', text: "Ol tek ǵana paydalanıwshı keńisliginde isleytuǵın.", isCorrect: false },
      { id: 'd', text: "Ol yad allokaciyasın basqaradı.", isCorrect: false }
    ]
  },
  {
    id: 106,
    text: "Futex Linux-ta ne ushın qollanıladı?",
    options: [
      { id: 'a', text: "Potok sinxronizaciyasın paydalanıwshı keńisliginde tez orınlaw.", isCorrect: true },
      { id: 'b', text: "Tek ǵana tarmaq adreslerin ózgertiw.", isCorrect: false },
      { id: 'c', text: "Fayl sistemasın formatlaw.", isCorrect: false },
      { id: 'd', text: "Virtual yadtı óshiriw.", isCorrect: false }
    ]
  },
  {
    id: 107,
    text: "calloc() hám malloc() arasındaǵı tiykarǵı ayırmashılıq nede?",
    options: [
      { id: 'a', text: "calloc() yadtı nollardıń sanı menen baslaydı.", isCorrect: true },
      { id: 'b', text: "calloc() tek ǵana Stack-ti qollanadı.", isCorrect: false },
      { id: 'c', text: "calloc() tezirek.", isCorrect: false },
      { id: 'd', text: "calloc() tek ǵana tarmaq ushın.", isCorrect: false }
    ]
  },
  {
    id: 108,
    text: "Yadqa kirisiw huqıqları ne arqalı qadaǵalanadı?",
    options: [
      { id: 'a', text: "MMU hám Page Table bitleri arqalı.", isCorrect: true },
      { id: 'b', text: "Tek ǵana fayl atı menen.", isCorrect: false },
      { id: 'c', text: "Tek ǵana Process ID menen.", isCorrect: false },
      { id: 'd', text: "Tek ǵana soket nomeri menen.", isCorrect: false }
    ]
  },
  {
    id: 109,
    text: "Fayl Descriptorı neni bildiredi?",
    options: [
      { id: 'a', text: "Ashılǵan faylǵa sıltawshı kishi san.", isCorrect: true },
      { id: 'b', text: "Tek ǵana yad allokaciyası.", isCorrect: false },
      { id: 'c', text: "Tek ǵana tarmaq portı.", isCorrect: false },
      { id: 'd', text: "Tek ǵana DMA kanalı.", isCorrect: false }
    ]
  },
  {
    id: 110,
    text: "Faylǵa kirisiw huqıqların ózgertiw ushın sistema shaqırıǵı qaysı?",
    options: [
      { id: 'a', text: "chmod()", isCorrect: true },
      { id: 'b', text: "chown()", isCorrect: false },
      { id: 'c', text: "open()", isCorrect: false },
      { id: 'd', text: "read()", isCorrect: false }
    ]
  },
  {
    id: 111,
    text: "Linux-ta Process yadın sırtqı diskke jılıstırıw mexanizmi neni bildiredi?",
    options: [
      { id: 'a', text: "Swapping", isCorrect: true },
      { id: 'b', text: "Caching", isCorrect: false },
      { id: 'c', text: "Fragmentaciya", isCorrect: false },
      { id: 'd', text: "Linking", isCorrect: false }
    ]
  },
  {
    id: 112,
    text: "Kernel Mode Processorǵa qanday múmkinshilik beredi?",
    options: [
      { id: 'a', text: "Barlıq Processor buyrıqların atqarıw.", isCorrect: true },
      { id: 'b', text: "Tek ǵana paydalanıwshı programmasın atqarıw.", isCorrect: false },
      { id: 'c', text: "Tek ǵana fayldı oqıw.", isCorrect: false },
      { id: 'd', text: "Tek ǵana tarmaq portlarını ashıw.", isCorrect: false }
    ]
  },
  {
    id: 113,
    text: "User Mode Processorǵa qanday sheklewler qoyadı?",
    options: [
      { id: 'a', text: "OS tiykarǵı yadına kirisiwge sheklew.", isCorrect: true },
      { id: 'b', text: "Tek ǵana tez faylǵa kirisiw.", isCorrect: false },
      { id: 'c', text: "Processlerdiń sinxronizaciyası.", isCorrect: false },
      { id: 'd', text: "Tarmaq baylanısın optimallastırıw.", isCorrect: false }
    ]
  },
  {
    id: 114,
    text: "Trap mexanizmi ne ushın qollanıladı?",
    options: [
      { id: 'a', text: "Programmalastırıw arqalı Kernel funksiyasına shaqırıw.", isCorrect: true },
      { id: 'b', text: "Tek ǵana yad allokaciyası.", isCorrect: false },
      { id: 'c', text: "Tek ǵana DMA-nı toqtatıw.", isCorrect: false },
      { id: 'd', text: "Tek ǵana Mutex qollanıw.", isCorrect: false }
    ]
  },
  {
    id: 115,
    text: "Virtual Bet ólsheminiń úlken bolıwınıń artıqmashılıǵı nede?",
    options: [
      { id: 'a', text: "Page Table ólsheminiń kishireyiwi.", isCorrect: true },
      { id: 'b', text: "Processlerdiń tez islew múmkinshiligi.", isCorrect: false },
      { id: 'c', text: "Fayl atınıń uzın bolıwı.", isCorrect: false },
      { id: 'd', text: "Tarmaq adresiniń kishi bolıwı.", isCorrect: false }
    ]
  },
  {
    id: 116,
    text: "Locality of Reference neni bildiredi?",
    options: [
      { id: 'a', text: "Kishi yad bólimine kirisiw tendenciyası.", isCorrect: true },
      { id: 'b', text: "Processler tek ǵana diskte isleytuǵın.", isCorrect: false },
      { id: 'c', text: "Fayllar tek ǵana bir direktoriyada jaylasqan.", isCorrect: false },
      { id: 'd', text: "Tarmaq tek ǵana bir IP adreske baylanıslı.", isCorrect: false }
    ]
  },
  {
    id: 117,
    text: "OS Processlerdi jaratıw hám óshiriw ushın qollanılatuǵın yad maydanı qaysı?",
    options: [
      { id: 'a', text: "Kernel Yadı", isCorrect: true },
      { id: 'b', text: "Stack", isCorrect: false },
      { id: 'c', text: "Heap", isCorrect: false },
      { id: 'd', text: "Tarmaq Buferi", isCorrect: false }
    ]
  },
  {
    id: 118,
    text: "Pointer arifmetikası sistemalı programmalastırıwda ne ushın zárúr?",
    options: [
      { id: 'a', text: "Yad adresleri menen tikkeley islew.", isCorrect: true },
      { id: 'b', text: "Tek ǵana fayl atın jazıw.", isCorrect: false },
      { id: 'c', text: "Mutexlerdi jaratıw.", isCorrect: false },
      { id: 'd', text: "Tarmaq paketlerin shifrlaw.", isCorrect: false }
    ]
  },
  {
    id: 119,
    text: "DMA Processordan júklemendi qalay ózgertedi?",
    options: [
      { id: 'a', text: "Processorǵa júklemendi kemeytedi.", isCorrect: true },
      { id: 'b', text: "Processorǵa júklemendi arttıradı.", isCorrect: false },
      { id: 'c', text: "Tek ǵana yad allokaciyasın toqtatadı.", isCorrect: false },
      { id: 'd', text: "Tek ǵana fayldı oqıwǵa ruqsat beredi.", isCorrect: false }
    ]
  },
  {
    id: 120,
    text: "Asynchronous I/O neni bildiredi?",
    options: [
      { id: 'a', text: "Programmanıń I/O tamamlanıwın kútiwsiz dawam etiw múmkinshiligi.", isCorrect: true },
      { id: 'b', text: "Programmanıń I/O tamamlanıwın kutip turıwı.", isCorrect: false },
      { id: 'c', text: "Tek ǵana DMA qollanıw.", isCorrect: false },
      { id: 'd', text: "Tek ǵana yad allokaciyası.", isCorrect: false }
    ]
  },
  {
    id: 121,
    text: "Processler arasındaǵı sinxronizaciyalawda Monitor neni bildiredi?",
    options: [
      { id: 'a', text: "Sinxronizaciyalawshı joqarı dárejeli konstruksiya.", isCorrect: true },
      { id: 'b', text: "Tek ǵana maǵlıwmatlardı saqlaw.", isCorrect: false },
      { id: 'c', text: "Tek ǵana faylǵa kirisiw.", isCorrect: false },
      { id: 'd', text: "Tek ǵana tarmaq adresin ózgertiw.", isCorrect: false }
    ]
  },
  {
    id: 122,
    text: "Fayl sistemasındaǵı FAT tiykarǵı wazıypası nede?",
    options: [
      { id: 'a', text: "Fayldıń maǵlıwmat bloklarınıń dizbegin dizip shıǵıw.", isCorrect: true },
      { id: 'b', text: "Tek ǵana Processlerdiń yadın basqarıw.", isCorrect: false },
      { id: 'c', text: "Tek ǵana tarmaq baylanısın qadaǵalaw.", isCorrect: false },
      { id: 'd', text: "Tek ǵana CPU tezligin ólshew.", isCorrect: false }
    ]
  },
  {
    id: 123,
    text: "Inode nomerleri ne ushın qollanıladı?",
    options: [
      { id: 'a', text: "Fayllardı anıqlaw hám olardıń metadata maǵlıwmatlarına kirisiw.", isCorrect: true },
      { id: 'b', text: "Tek ǵana Process ID nomeri.", isCorrect: false },
      { id: 'c', text: "Tek ǵana tarmaq portı.", isCorrect: false },
      { id: 'd', text: "Tek ǵana yad bólimi.", isCorrect: false }
    ]
  },
  {
    id: 124,
    text: "Zombie Process neni bildiredi?",
    options: [
      { id: 'a', text: "Atqarıwın tamamlaǵan, biraq kútip alınbaǵan Process.", isCorrect: true },
      { id: 'b', text: "Process atqarıwdı baslamaǵan.", isCorrect: false },
      { id: 'c', text: "Process áste isleytuǵın.", isCorrect: false },
      { id: 'd', text: "Process tek ǵana tarmaqta isleytuǵın.", isCorrect: false }
    ]
  },
  {
    id: 125,
    text: "Orphan Process neni bildiredi?",
    options: [
      { id: 'a', text: "Ana Processi óz balası Processinen aldın tamamlaǵan Process.", isCorrect: true },
      { id: 'b', text: "Process atqarıwdıń eń basında.", isCorrect: false },
      { id: 'c', text: "Process tek ǵana yad allokaciyası menen isleytuǵın.", isCorrect: false },
      { id: 'd', text: "Process tek ǵana DMA-nı qollanıw.", isCorrect: false }
    ]
  },
  {
    id: 126,
    text: "Process yadın diagnostika etiw ushın Linux-ta qollanılatuǵın úlgili fayl qaysı?",
    options: [
      { id: 'a', text: "/proc/[PID]/maps", isCorrect: true },
      { id: 'b', text: "/etc/passwd", isCorrect: false },
      { id: 'c', text: "/var/log/messages", isCorrect: false },
      { id: 'd', text: "/usr/bin/", isCorrect: false }
    ]
  },
  {
    id: 127,
    text: "Stack Overflow qátesi qalay júz beredi?",
    options: [
      { id: 'a', text: "Funksiya shaqırıqları Stek-tiń bólingen bóliminen asıp ketken waqıtta.", isCorrect: true },
      { id: 'b', text: "Tek ǵana yad allokaciyası nátiyjesinde.", isCorrect: false },
      { id: 'c', text: "Tek ǵana faylǵa kirisiw qátesi.", isCorrect: false },
      { id: 'd', text: "Tek ǵana tarmaq uziliwi.", isCorrect: false }
    ]
  },
  {
    id: 128,
    text: "Buffer Overflow nege qáwip tuwdıradı?",
    options: [
      { id: 'a', text: "Programmanıń qáwipsizligin buzıwı hám koddı orınlaw múmkinshiligi.", isCorrect: true },
      { id: 'b', text: "Tek ǵana yad allokaciyasın optimallastırıw.", isCorrect: false },
      { id: 'c', text: "Tek ǵana fayldı oqıw.", isCorrect: false },
      { id: 'd', text: "Tek ǵana tarmaq tezligin asırıw.", isCorrect: false }
    ]
  },
  {
    id: 129,
    text: "Virtual Bet Fizikalıq yadqa júkleniwge tayın bolǵanda, ol yadta qaysı birlikte saqlanadı?",
    options: [
      { id: 'a', text: "Frame (Kadra)", isCorrect: true },
      { id: 'b', text: "Segment", isCorrect: false },
      { id: 'c', text: "Blok", isCorrect: false },
      { id: 'd', text: "Cluster", isCorrect: false }
    ]
  },
  {
    id: 130,
    text: "Process Kestesi neni saqlaydı?",
    options: [
      { id: 'a', text: "Islep atırǵan hárbir Process haqqında maǵlıwmat (PCB).", isCorrect: true },
      { id: 'b', text: "Tek ǵana fayl atlarını.", isCorrect: false },
      { id: 'c', text: "Tek ǵana tarmaq IP adreslerin.", isCorrect: false },
      { id: 'd', text: "Tek ǵana CPU tezligin.", isCorrect: false }
    ]
  },
  {
    id: 131,
    text: "SSTF disk rejeleshtiriw algoritminiń tiykarǵı maqseti nede?",
    options: [
      { id: 'a', text: "Disk basınıń orın almasıw múddetin minimallastırıw.", isCorrect: true },
      { id: 'b', text: "Tek ǵana kelgen tártipte islew.", isCorrect: false },
      { id: 'c', text: "Tek ǵana eń uzaq orın almasıw.", isCorrect: false },
      { id: 'd', text: "Tek ǵana yad allokaciyası.", isCorrect: false }
    ]
  },
  {
    id: 132,
    text: "C-SCAN disk rejeleshtiriw algoritmi ózgesheligi nede?",
    options: [
      { id: 'a', text: "Bir jóneliste úziksis orın almasıw hám basına qaytıw.", isCorrect: true },
      { id: 'b', text: "Tek ǵana kelgen tártipte islew.", isCorrect: false },
      { id: 'c', text: "Tek ǵana eń qısqa orın almasıwǵa qaraǵan halda islew.", isCorrect: false },
      { id: 'd', text: "Tek ǵana tarmaq baylanısın optimallastırıw.", isCorrect: false }
    ]
  },
  {
    id: 133,
    text: "DMA Kirgiziw/Shıǵarıw operaciyaları tamamlanǵannan soń Processorǵa ne arqalı xabar beredi?",
    options: [
      { id: 'a', text: "Úzilis (Interrupt) arqalı.", isCorrect: true },
      { id: 'b', text: "Tek ǵana Socket arqalı.", isCorrect: false },
      { id: 'c', text: "Tek ǵana fayl at qálli.", isCorrect: false },
      { id: 'd', text: "Tek ǵana yad allokaciyası arqalı.", isCorrect: false }
    ]
  },
  {
    id: 134,
    text: "Endianness tarmaq programmalastırıwda ne ushın áhmiyetli?",
    options: [
      { id: 'a', text: "Maǵlıwmatlardı túrli arxitekturalar arasında durıs almasıw.", isCorrect: true },
      { id: 'b', text: "Tek ǵana fayl ólshemin esaplaw.", isCorrect: false },
      { id: 'c', text: "Tek ǵana processlerdi rejeleshtiriw.", isCorrect: false },
      { id: 'd', text: "Tek ǵana yad fragmentaciyasın joq etiw.", isCorrect: false }
    ]
  },
  {
    id: 135,
    text: "NFS neni bildiredi?",
    options: [
      { id: 'a', text: "Tarmaq arqalı fayl sistemasın bólisiw ushın protokol (Network File System).", isCorrect: true },
      { id: 'b', text: "Tek ǵana yad allokatorı.", isCorrect: false },
      { id: 'c', text: "Tek ǵana Process ID.", isCorrect: false },
      { id: 'd', text: "Tek ǵana DMA kanalı.", isCorrect: false }
    ]
  },
  {
    id: 136,
    text: "mmap() sistema shaqırıǵı ne ushın qollanıladı?",
    options: [
      { id: 'a', text: "Fayl yaki yadti Process yad maydanına kartaǵa qoyıw.", isCorrect: true },
      { id: 'b', text: "Tek ǵana tarmaq baylanısın jaratıw.", isCorrect: false },
      { id: 'c', text: "Mutexlerdi jaratıw.", isCorrect: false },
      { id: 'd', text: "Processlerdi rejeleshtiriw.", isCorrect: false }
    ]
  },
  {
    id: 137,
    text: "POSIX standartları nege baǵdarlanǵan?",
    options: [
      { id: 'a', text: "Programma portabelligin (túrli OS-larda islew) támiyinlew.", isCorrect: true },
      { id: 'b', text: "Tek ǵana yad ólshemin sheklew.", isCorrect: false },
      { id: 'c', text: "Tek ǵana fayl sistemasın sıǵıw.", isCorrect: false },
      { id: 'd', text: "Tek ǵana tarmaq tezligin asırıw.", isCorrect: false }
    ]
  },
  {
    id: 138,
    text: "Compiler programması tiykarǵı wazıypası nede?",
    options: [
      { id: 'a', text: "Derek kodın mashina kodına awdarıw.", isCorrect: true },
      { id: 'b', text: "Tek ǵana yad allokaciyası.", isCorrect: false },
      { id: 'c', text: "Tek ǵana tarmaq portlarını ashıw.", isCorrect: false },
      { id: 'd', text: "Tek ǵana faylǵa kirisiw.", isCorrect: false }
    ]
  },
  {
    id: 139,
    text: "Pre-processor C programmasında ne isleytuǵın?",
    options: [
      { id: 'a', text: "Komponovkadan aldın makroslardı (#include, #define) atqarıw.", isCorrect: true },
      { id: 'b', text: "Tek ǵana yad allokaciyası.", isCorrect: false },
      { id: 'c', text: "Tek ǵana tarmaq baylanısın jaratıw.", isCorrect: false },
      { id: 'd', text: "Tek ǵana fayldı óshiriw.", isCorrect: false }
    ]
  },
  {
    id: 140,
    text: "Condition Variable ne ushın qollanıladı?",
    options: [
      { id: 'a', text: "Process/Potoktıń belgili bir shártti kútiwi ushın.", isCorrect: true },
      { id: 'b', text: "Tek ǵana yad allokaciyası.", isCorrect: false },
      { id: 'c', text: "Tek ǵana tarmaq IP adresin ózgertiw.", isCorrect: false },
      { id: 'd', text: "Tek ǵana fayl atın sanaw.", isCorrect: false }
    ]
  },
  {
    id: 141,
    text: "Producer-Consumer máseleleri kóbinese qaysı sinxronizaciyalaw quralı menen sheshiledi?",
    options: [
      { id: 'a', text: "Semaforlar yaki buferler menen.", isCorrect: true },
      { id: 'b', text: "Tek ǵana DMA-nı qollanıw.", isCorrect: false },
      { id: 'c', text: "Tek ǵana CPU registrlerin.", isCorrect: false },
      { id: 'd', text: "Tek ǵana fayl huqıqların.", isCorrect: false }
    ]
  },
  {
    id: 142,
    text: "Priority Inversion neni bildiredi?",
    options: [
      { id: 'a', text: "Tómen áhmiyetli process joqarı áhmiyetli processti bloklawı.", isCorrect: true },
      { id: 'b', text: "Processlerdiń durıs atqarıwı.", isCorrect: false },
      { id: 'c', text: "Tek ǵana yad allokaciyası.", isCorrect: false },
      { id: 'd', text: "Tek ǵana tarmaq tezliginiń joqarılıǵı.", isCorrect: false }
    ]
  },
  {
    id: 143,
    text: "Volatile gilt sózi ne ushın qollanıladı?",
    options: [
      { id: 'a', text: "Ózgeriwshiniń qiymatın yadtan tuwrıdan-tuwrı oqıw (optimizaciyanı boldırmaw).", isCorrect: true },
      { id: 'b', text: "Tek ǵana yad allokaciyası.", isCorrect: false },
      { id: 'c', text: "Tek ǵana fayl atın ózgertiw.", isCorrect: false },
      { id: 'd', text: "Tek ǵana tarmaq baylanısın.", isCorrect: false }
    ]
  },
  {
    id: 144,
    text: "Superuser huqıqları ne ushın zárúr?",
    options: [
      { id: 'a', text: "OS tiykarǵı konfiguraciyasına hám barlıq fayllarǵa kirisiw.", isCorrect: true },
      { id: 'b', text: "Tek ǵana yad allokaciyası.", isCorrect: false },
      { id: 'c', text: "Tek ǵana tarmaq adresin ózgertiw.", isCorrect: false },
      { id: 'd', text: "Tek ǵana DMA-nı óshiriw.", isCorrect: false }
    ]
  },
  {
    id: 145,
    text: "Init Process rolı nede?",
    options: [
      { id: 'a', text: "Barlıq processlerdiń ana processi (PID 1).", isCorrect: true },
      { id: 'b', text: "Tek ǵana yad allokaciyası.", isCorrect: false },
      { id: 'c', text: "Tek ǵana tarmaq adresin ózgertiw.", isCorrect: false },
      { id: 'd', text: "Tek ǵana fayldı óshiriw.", isCorrect: false }
    ]
  },
  {
    id: 146,
    text: "Kernel panic neni bildiredi?",
    options: [
      { id: 'a', text: "OS yadınıń dúzetip bolmaytuǵın qátege ushırawı.", isCorrect: true },
      { id: 'b', text: "Tek ǵana yad allokaciyası.", isCorrect: false },
      { id: 'c', text: "Tek ǵana tarmaq baylanısın jaratıw.", isCorrect: false },
      { id: 'd', text: "Tek ǵana faylǵa kirisiw.", isCorrect: false }
    ]
  },
  {
    id: 147,
    text: "TLB miss júz bergende OS birinshi náwbette ne isleytuǵın?",
    options: [
      { id: 'a', text: "Page Table'di (betler kestesin) tekseredi.", isCorrect: true },
      { id: 'b', text: "Keshti tazalaydı.", isCorrect: false },
      { id: 'c', text: "DMA-nı bloklaydı.", isCorrect: false },
      { id: 'd', text: "IRQ-nı óshiredi.", isCorrect: false }
    ]
  },
  {
    id: 148,
    text: "Kernel space -> user space ótiwdegi tiykarǵı mexanizm qaysı?",
    options: [
      { id: 'a', text: "Sistema shaqırıǵınan qaytıw (return from trap).", isCorrect: true },
      { id: 'b', text: "DMA almasıwı.", isCorrect: false },
      { id: 'c', text: "BIOS ISR mexanizmi.", isCorrect: false },
      { id: 'd', text: "CPU mikro-kodı.", isCorrect: false }
    ]
  },
  {
    id: 149,
    text: "Linker programmasınıń wazıypası ne?",
    options: [
      { id: 'a', text: "Obyekt fayllardı bir orınlanıwshı faylǵa birlestiriw.", isCorrect: true },
      { id: 'b', text: "Kodtı qatarma-qatar oqıp orınlaw.", isCorrect: false },
      { id: 'c', text: "Kodtı joqarı dárejedegi tilge awdarıw.", isCorrect: false },
      { id: 'd', text: "Qátelerdi avtomatikalıq túrde dúzetiw.", isCorrect: false }
    ]
  },
  {
    id: 150,
    text: "Loader wazıypası ne?",
    options: [
      { id: 'a', text: "Orınlanıwshı fayldı diskten yadqa júklew.", isCorrect: true },
      { id: 'b', text: "Programmanıń derek kodın jazıw.", isCorrect: false },
      { id: 'c', text: "Fayllardı arxivlep saqlaw.", isCorrect: false },
      { id: 'd', text: "Tarmaq qáwipsizligin tekseriw.", isCorrect: false }
    ]
  }
];
