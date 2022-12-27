import AllEvents from '../../components/event/AllEvents'
import ScrollToTop from '../../components/ScrollToTop'

import EventUtils from '../../utils/EventUtils'

export default function AllEventPage(props) {

	return (
		<main className='w-full snap-start mx-auto min-h-screen theme-toggle'>
			<ScrollToTop />
			<AllEvents events={props.events}/>
		</main>
	)
}

export async function getStaticProps() {
	const API_URL = process.env.EVENT_API_URL;
	let events;

	try {
		let raw = await fetch(API_URL);
		raw = await raw.json();
		events = EventUtils.shapeData(raw.data);
	}
	catch {
		events = null;
	}

	return {
		props: {
			events: events,
		},
		// revalidate: 60 * 30, // Re-generate the page every 30 mins
	};
}