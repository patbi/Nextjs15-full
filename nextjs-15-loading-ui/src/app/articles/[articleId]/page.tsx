"use client";

import Link from "next/link";
import { use } from "react";

//export default async function
export default function NewsArticle({ params, searchParams }: {
	params: Promise<{ articleId: string }>;
	searchParams: Promise<{ lang ? : "en" | "es" | "fr"}>;
}) {
	//const { articleId } = await params;
	const { articleId } = use (params);
	//const { lang = "en" } = await searchParams;
	const { lang = "en" } = use (searchParams);
	return (
		<div>
			<h1>News articles {articleId}</h1>
			<p>Reading in {lang}</p>

			<div>
				<Link href={`/articles/${articleId}?lang=en`}>English</Link>
				<Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
				<Link href={`/articles/${articleId}?lang=fr`}>French</Link>
			</div>
		</div>
	);
}