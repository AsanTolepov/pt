// src/utils.ts
import { Question } from './types';

// Bu funksiya "Random" raqamni kiritilgan kod (seed) asosida chiqaradi.
// Agar kod bir xil bo'lsa, natija ham har doim bir xil bo'ladi.
function mulberry32(a: number) {
  return function() {
    var t = a += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  }
}

export const getQuestionsBySeed = (allQuestions: Question[], seedCode: string, count: number = 20): Question[] => {
  // Kodni raqamga aylantiramiz (masalan "12345" -> 12345)
  const seed = parseInt(seedCode.replace(/\D/g, '')) || 8888;
  const random = mulberry32(seed);

  // Asl arrayni buzmaslik uchun nusxa olamiz
  const shuffled = [...allQuestions];

  // Fisher-Yates shuffle algoritmi (bizning random funksiya bilan)
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  // 150 ta savoldan boshidagi keraklisini (masalan 20 tasini) kesib olamiz
  // Agar savollar kam bo'lsa, borini qaytaradi
  const finalCount = Math.min(count, shuffled.length);
  return shuffled.slice(0, finalCount);
};