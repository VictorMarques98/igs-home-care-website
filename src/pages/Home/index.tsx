import { FloatingActionButton } from "../../components/FloatingButton";
import { About, Gallery, Introduction, Summary } from "../../modules";

const Home = () => {
    return (
        <main>
            <Introduction />
            <Summary />
            <Gallery />
            <About />
            <FloatingActionButton />
        </main>
    )
};

export default Home;