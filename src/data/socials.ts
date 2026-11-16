/**
 * SNS リンクの定義
 */
export type Social = {
  id: 'x' | 'discord' | 'github';
  label: string;
  handle: string;
  href: string;
};

export const socials: Social[] = [
  {
    id: 'x',
    label: 'Twitter (X)',
    handle: '@omoideno__',
    href: 'https://twitter.com/i/user/2044927964530319360',
  },
  {
    id: 'discord',
    label: 'Discord',
    handle: 'omoideno___',
    href: 'https://discord.com/users/1445347049611460642',
  },
  {
    id: 'github',
    label: 'GitHub',
    handle: 'oknyyyy',
    href: 'https://github.com/oknyyyy',
  },
];
