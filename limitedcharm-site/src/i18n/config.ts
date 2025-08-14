export const SUPPORTED_LANGUAGES = ['mk','en','sq'] as const;
export type Lang = (typeof SUPPORTED_LANGUAGES)[number];
export const DEFAULT_LANG: Lang = 'mk';

export function isLang(lang: string): lang is Lang {
  return SUPPORTED_LANGUAGES.includes(lang as Lang);
}