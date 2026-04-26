import Image from "next/image";
import Link from "next/link";

export const mdxComponents = {
    h1: (props: any) => <h1 className="mt-10 mb-4 text-4xl font-bold" {...props} />,

    h2: (props: any) => <h2 className="mt-8 mb-3 border-b border-zinc-800 pb-2 text-3xl font-semibold" {...props} />,

    h3: (props: any) => <h3 className="mt-6 mb-2 text-2xl font-semibold" {...props} />,

    p: (props: any) => <p className="mb-4 leading-relaxed text-zinc-600" {...props} />,

    a: ({ href, children, ...props }: any) => (
        <Link href={href} className="text-green-400 underline transition hover:text-green-300" {...props}>
            {children}
        </Link>
    ),

    ul: (props: any) => <ul className="mb-4 list-disc space-y-2 pl-6" {...props} />,

    ol: (props: any) => <ol className="mb-4 list-decimal space-y-2 pl-6" {...props} />,

    li: (props: any) => <li className="text-zinc-600" {...props} />,

    blockquote: (props: any) => (
        <blockquote className="my-6 border-l-4 border-green-400 pl-4 text-zinc-500 italic" {...props} />
    ),

    code: ({ children }: any) => <code className="rounded bg-zinc-800 px-1 py-0.5 text-sm text-green-400">{children}</code>,

    pre: (props: any) => <pre className="mb-6 overflow-x-auto rounded-xl bg-zinc-900 p-4 text-sm" {...props} />,

    img: ({ src, alt }: any) => <Image src={src} alt={alt} width={800} height={400} className="my-6 rounded-xl" />,

    hr: () => <hr className="my-10 border-zinc-800" />,
};
