import { useEffect } from "react";
import { Redirect } from "../../modules";

const Redirecting = () => {
	const isMobile = window.innerWidth <= 768;

	useEffect(() => {
		setTimeout(() => {
			window.location.href = 'https://igshomecare.com.au/contact-us/';
		}, 5000);
	}, []);

	return (
		<main>
			<Redirect />
		</main>
	);
};

export default Redirecting;