export default function Home() {
	return (
		<main>
			<div className="w-full h-screen slide-container">
				{/* <Slide
				bgColor="bg-slate-700"
				bgImage="bg-[url('/agv-home-1.jpg')]"
				text="Powerful and Intelligent Solutions">
				<div class="text-black text-5xl font-bold max-w-2xl">
					Empowering Technology with End to End Solutions
				</div>
			</Slide>*/}
				{/* <Slide center="items-center" bgColor="bg-slate-700" bgImage="">
					<div className="max-w-3xl text-6xl font-bold text-white">
						Empowering Technology with End to End Solutions
					</div>
				</Slide> */}
				<video
					className="relative object-cover w-screen h-screen"
					autoPlay
					loop
					muted
					poster="https://assets.codepen.io/6093409/river.jpg">
					<source
						src="https://assets.codepen.io/6093409/river.mp4"
						type="video/mp4"
					/>
				</video>
				<div className="absolute top-[45%] left-0 right-0 max-w-[50rem] mx-auto text-6xl font-bold text-white text-center">
					Empowering Technology with End to End Solutions
				</div>
			</div>
		</main>
	)
}
