/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";

export const mdxComponents = {
    h1: (props: any) => (
        <h1 className="mt-10 mb-4 text-[2rem] leading-[1.2] font-bold tracking-[-0.03em] text-zinc-900" {...props} />
    ),

    h2: (props: any) => (
        <h2
            className="mt-8 mb-3 border-b border-zinc-200 pb-2.5 text-[1.25rem] font-semibold tracking-[-0.02em] text-zinc-900"
            {...props}
        />
    ),

    h3: (props: any) => <h3 className="mt-6 mb-2 text-base font-semibold tracking-[-0.01em] text-zinc-900" {...props} />,

    p: (props: any) => <p className="mb-4 text-[0.9375rem] leading-[1.75] text-zinc-500" {...props} />,

    a: ({ href, children, ...props }: any) => (
        <Link
            href={href}
            className="font-medium text-green-600 underline decoration-green-600/40 underline-offset-[3px] transition-[text-decoration-color] hover:decoration-green-600"
            {...props}
        >
            {children}
        </Link>
    ),

    ul: (props: any) => <ul className="mb-4 flex list-none flex-col gap-1.5 pl-0" {...props} />,

    ol: (props: any) => <ol className="mb-4 flex list-none flex-col gap-1.5 pl-0" {...props} />,

    li: ({ children, ...props }: any) => (
        <li className="flex items-center gap-2 text-[0.9375rem] leading-[1.6] text-zinc-500" {...props}>
            <span className="mt-px h-1.25 w-1.25 shrink-0 rounded-full bg-green-600" />
            {children}
        </li>
    ),

    blockquote: (props: any) => (
        <blockquote
            className="my-6 rounded-[0_6px_6px_0] rounded-r-md border-l-[3px] border-green-600 bg-green-50 py-3.5 pr-5 pl-5 text-[0.9375rem] leading-[1.7] text-zinc-700 italic"
            {...props}
        />
    ),

    code: ({ children }: any) => (
        <code className="rounded border border-zinc-300 bg-zinc-200 px-1.5 py-0.5 font-mono text-[0.8em] font-medium text-zinc-900 in-[pre]:rounded-none in-[pre]:border-0 in-[pre]:bg-transparent in-[pre]:p-0 in-[pre]:text-[1em] in-[pre]:font-normal">
            {children}
        </code>
    ),

    pre: (props: any) => (
        <pre
            className="mb-6 overflow-x-auto rounded-lg border border-zinc-300 bg-zinc-200 p-5 font-mono text-[0.8125rem] leading-[1.75] text-zinc-900"
            {...props}
        />
    ),

    table: (props: any) => (
        <div className="my-6 overflow-x-auto rounded-lg border border-zinc-200">
            <table className="w-full border-collapse text-sm" {...props} />
        </div>
    ),

    thead: (props: any) => <thead className="border-b border-zinc-300 bg-zinc-100" {...props} />,

    tbody: (props: any) => <tbody {...props} />,

    tr: (props: any) => <tr className="border-b border-zinc-100 bg-white last:border-0 even:bg-zinc-50" {...props} />,

    th: (props: any) => (
        <th
            className="px-4 py-2.5 text-left text-[0.8125rem] font-semibold tracking-wide whitespace-nowrap text-zinc-900"
            {...props}
        />
    ),

    td: (props: any) => <td className="px-4 py-2.5 text-[0.875rem] text-zinc-600" {...props} />,

    img: ({ src, alt }: any) => (
        <div className="my-6 overflow-hidden rounded-lg border border-zinc-200">
            <Image src={src} alt={alt ?? ""} width={800} height={400} className="w-full" />
        </div>
    ),

    hr: () => <hr className="my-10 border-zinc-200" />,
};
