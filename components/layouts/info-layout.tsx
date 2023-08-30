import Image from 'next/image'

type InfoLayoutProps = {
	title: string
	description: React.ReactNode
	imgSrc: string
	caption: string
	children: React.ReactNode
}

export function InfoLayout({ title, imgSrc, caption, children }: InfoLayoutProps) {
	return (
		<>
			<section className="bg-gradient-to-b from-secondary-900 to-accent-500">
				<div className="container max-w-screen-xl flex flex-col justify-end lg:h-36">
					<figure className="relative lg:hidden my-8 h-92 md:h-[28rem] rounded-3xl overflow-hidden shadow-xl">
						<Image src={imgSrc} alt={caption} className="object-cover" fill />
					</figure>
					<h1 className="head-1 text-white leading-none translate-y-2">{title}</h1>
				</div>
			</section>
			<div className="grid container gap-x-8 max-w-screen-xl lg:grid-cols-2 relative -top-28">
				<p className="max-w-prose pt-32 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sint repudiandae natus praesentium inventore eligendi voluptates perferendis, voluptatibus est nisi, velit debitis modi a aperiam obcaecati totam, laudantium eos quasi.</p>
				<div className="max-lg:hidden">
					<figure className="h-92 rounded-3xl overflow-hidden relative shadow-xl">
						<Image src={imgSrc} alt={caption} className="object-cover" fill />
					</figure>
				</div>
			</div>
			<section className="-translate-y-20">
				{children}
			</section>
		</>
	)
}