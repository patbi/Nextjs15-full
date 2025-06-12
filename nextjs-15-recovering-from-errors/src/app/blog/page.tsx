import { Metadata } from "next";

export const metadata: Metadata = {
	// title: "Blog",
    title: {
    	absolute: "Absolute Title",
    },
};

export default async function Blog() {
	await new Promise(resolve => {
		setTimeout(() =>{
			resolve("intentional delay");
		}, 2000)
	});
	return <h1>My blog!</h1>;
}