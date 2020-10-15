import React from 'react'
import Card from './Card';

const portfolio = [{
    job: 'Land',
    duration: '2 Weeks',
    description: 'Beautiful yard work',
    photo: 'https://images.landscapingnetwork.com/pictures/images/401x227Exact/backyard-landscaping_1/wheelchair-accessible-backyard-the-cornerstone-landscape-group_543.jpg'
},
{
    job: 'Land',
    duration: '2 Weeks',
    description: 'Beautiful yard work',
    photo: 'https://images.landscapingnetwork.com/pictures/images/401x227Exact/backyard-landscaping_1/wheelchair-accessible-backyard-the-cornerstone-landscape-group_543.jpg'
},
{
    job: 'Land',
    duration: '2 Weeks',
    description: 'Beautiful yard work',
    photo: 'https://images.landscapingnetwork.com/pictures/images/401x227Exact/backyard-landscaping_1/wheelchair-accessible-backyard-the-cornerstone-landscape-group_543.jpg'
},
{
    job: 'Land',
    duration: '2 Weeks',
    description: 'Beautiful yard work',
    photo: 'https://images.landscapingnetwork.com/pictures/images/401x227Exact/backyard-landscaping_1/wheelchair-accessible-backyard-the-cornerstone-landscape-group_543.jpg'
},
{
    job: 'Land',
    duration: '2 Weeks',
    description: 'Beautiful yard work',
    photo: 'https://images.landscapingnetwork.com/pictures/images/401x227Exact/backyard-landscaping_1/wheelchair-accessible-backyard-the-cornerstone-landscape-group_543.jpg'
},
{
    job: 'Land',
    duration: '2 Weeks',
    description: 'Beautiful yard work',
    photo: 'https://images.landscapingnetwork.com/pictures/images/401x227Exact/backyard-landscaping_1/wheelchair-accessible-backyard-the-cornerstone-landscape-group_543.jpg'
},
{
    job: 'Land',
    duration: '2 Weeks',
    description: 'Beautiful yard work',
    photo: 'https://images.landscapingnetwork.com/pictures/images/401x227Exact/backyard-landscaping_1/wheelchair-accessible-backyard-the-cornerstone-landscape-group_543.jpg'
},
{
    job: 'Land',
    duration: '2 Weeks',
    description: 'Beautiful yard work',
    photo: 'https://images.landscapingnetwork.com/pictures/images/401x227Exact/backyard-landscaping_1/wheelchair-accessible-backyard-the-cornerstone-landscape-group_543.jpg'
},]


export default function Homepage() {
    return (
        <div className='homepage'>
            <div className='imgwrap'>
                <h2 className='banner'>Hero Banner Goes Here</h2>
                <button className='herobtn'>Book Now!</button>
            </div>
            <div className='heading'>
                <h2 className='header'>Here's who we are!</h2>
                <div className="infowrap">
                    <p className='info1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam voluptatibus ipsa fuga illum vero incidunt voluptatum dolore. Laboriosam molestias, quas quaerat eveniet enim quidem hic dicta magni fugit facere sed incidunt perspiciatis delectus fugiat iusto adipisci aliquid, omnis commodi veritatis? Quam cumque itaque nam, harum quibusdam amet voluptates impedit hic voluptatibus similique libero nostrum quisquam, consequatur quas sit, odit alias.</p>
                    <p className='info2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam voluptatibus ipsa fuga illum vero incidunt voluptatum dolore. Laboriosam molestias, quas quaerat eveniet enim quidem hic dicta magni fugit facere sed incidunt perspiciatis delectus fugiat iusto adipisci aliquid, omnis commodi veritatis? Quam cumque itaque nam, harum quibusdam amet voluptates impedit hic voluptatibus similique libero nostrum quisquam, consequatur quas sit, odit alias.</p>
                </div>
            </div>
            <div className="portfolio">
                <h3>Portfolio</h3>
                <div className="cardwrap">
                    {portfolio.map(p => (
                        <Card p={p} />
                    ))}
                </div>
            </div>

            <div className="informationalpara">
                <h3>Some Attractive Title</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium similique dolorum aperiam nisi, alias quis aliquam necessitatibus quidem nemo laborum fugiat asperiores harum. Deserunt odit dolores ipsam voluptatem enim perspiciatis fugiat, ratione in laboriosam dolorum corporis minus adipisci, similique est blanditiis, eaque quaerat quibusdam! Voluptatum fugiat, eaque corrupti distinctio veritatis aliquam mollitia rem cumque doloribus eos! Beatae quos minus assumenda vitae doloremque iure similique consequuntur aut repellendus veniam voluptate nam tempora earum unde adipisci necessitatibus, dicta itaque nesciunt obcaecati? Aspernatur quae voluptatibus eius unde omnis sapiente commodi? Modi omnis ullam iste ducimus saepe perferendis odio, vitae molestias, esse, culpa temporibus?</p>
            </div>


        </div>
    )
}
