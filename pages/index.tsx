import Link from "next/link";
import Layout from "../components/Layout";

const IndexPage = () => (
	<Layout title="Home | Next.js + TypeScript Example">
		<h1 className="animate__animated animate__fadeIn">Hello Next.js 👋</h1>
		<p className="bg-red-400 animate__animated animate__fadeIn">
			<Link href="/about">
				<a>About</a>
			</Link>
		</p>
	</Layout>
);

export default IndexPage;
