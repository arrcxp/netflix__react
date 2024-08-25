import { useState } from 'react';
import './FreqOues.css'

const FreqOues = () => {
    const [currentIndex, setCurrntIndex] = useState(null);
    const freqQues = [
        {
            title: 'What is Netflix?',
            context: 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. Theres always something new to discover and new TV shows and movies are added every week!'
        },
        {
            title: 'How much does Netflix cost?',
            context: 'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from THB 99 to THB 419 a month. No extra costs, no contracts.'
        },
        {
            title: 'Where can I watch?',
            context: 'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favorite shows with the iOS or Android app. Use downloads to watch while youre on the go and without an internet connection. Take Netflix with you anywhere.'
        },
        {
            title: 'How do I cancel?',
            context: 'Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.'
        },
        {
            title: 'What can I watch on Netflix?',
            context: 'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.'
        },
        {
            title: 'Is Netflix good for kids?',
            context: 'The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you dont want kids to see.'
        },
    ]
    
    const checkActive = (index) => {
        setCurrntIndex(() => currentIndex === index ? null : index)
    }

    return( 
        <div className='freq__container'> 
            <h1 style={{color: '#fff'}}>Frequently Asked Questions</h1>
            {freqQues.map((item, index) => {
                const isActive = currentIndex === index;
                return(
                    <div key={index} className='freq__box__out'>
                        <div className="freq__box"> 
                            {item.title}
                            <span onClick={() => checkActive(index)}>
                                {isActive ? 'x' : '+'}
                            </span>
                        </div>
                        {isActive && 
                            <div className='freq__context'>
                                {item.context}
                            </div>
                        }
                    </div>
                );
             })}
        </div>
    );
}

export default FreqOues;