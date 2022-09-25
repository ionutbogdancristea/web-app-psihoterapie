import ana from './Media/ana.png'

function DespreMinePage() 
{
    return <div>
        <div className="flex flex-row">
        <div className="w-4/5 pl-20">
            Bee Movie is a 2007 American computer-animated comedy film produced by DreamWorks Animation and distributed by Paramount Pictures. Directed by Simon J. Smith and Steve Hickner from a screenplay by Jerry Seinfeld, Spike Feresten, Barry Marder and Andy Robin, it stars the voices of Seinfeld, Renée Zellweger, Matthew Broderick, John Goodman, Patrick Warburton, and Chris Rock. The film centers on Barry B. Benson (Seinfeld), a honey bee who tries to sue the human race for exploiting bees after learning from his florist friend Vanessa Bloome (Zellweger) that humans sell and consume honey.Bee Movie debuted in New York City on October 25, 2007, and was released in theaters in the United States on November 2. Upon its release, it received mixed reviews from critics, who praised its humor and voice cast, but criticized its plot. Nevertheless, the film was a moderate box office success, grossing $293 million worldwide. It has since gathered a cult following, partly driven by memes of the film shared on social media.
        </div>
        <div style={{alignItems: 'center',justifyContent: 'center',}}>
            <img src={ana} alt="Ana" className="max-h-96"></img>
        </div>

        </div> 

    </div>;
}

export default DespreMinePage;