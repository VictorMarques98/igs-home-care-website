import { useEffect } from "react";
import { Redirect } from "../../modules";
import { email } from "../../utils/constants";

const Redirecting = () => {
	const isMobile = window.innerWidth <= 768;

	useEffect(() => {
		setTimeout(() => {
			if (isMobile) {
				window.location.href = 'tel:+0421697161';
			} else {
				window.location.href = email;
			}
		}, 5000);
	}, []);

	return (
		<main>
			<Redirect />
		</main>
	);
};

export default Redirecting;