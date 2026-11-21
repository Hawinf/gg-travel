import {Shell} from '@/components/Site';import {locales} from '@/lib/i18n';
export function generateStaticParams(){return locales.map(locale=>({locale}));}
export default async function LocaleLayout({children,params}:{children:React.ReactNode;params:Promise<{locale:string}>}){const {locale}=await params;return <Shell locale={locale}>{children}</Shell>}
