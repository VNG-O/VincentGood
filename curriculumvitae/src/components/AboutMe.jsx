import { Grid, Typography } from '@material-ui/core';
import Card from './common/Card';
import SectionColumn from './common/SectionColumns'

const aboutCard = [
    {
        title: "My story",
        text: "As an Industrial Engineer, I enjoy using my problem-solving ability and technical skills to tackle tasks head-on. My academic background, industrial placements, and work experience have given me the ability to assess a situation and adapt my approach accordingly in a high-stress environment. This also further developed my attention to detail, team management and interpersonal communication skills. \n \n Having travelled to England, Southern Africa, and South-East Asia, I am accustomed to adapting to my surroundings and bringing a unique perspective to others. Africa is my continent, and I believe in helping grow it to its full potential.",
    },
    {
        title: "Values",
        text: "The people in my life hold a special place in my heart.",
    },
  ]

const AboutMe = (props) => {

    return (

        <SectionColumn title="A little bit about me..." textAlign="justify" style={{ padding: "3rem"}} id={props.id}>
            {aboutCard.map((item, index) => (

                <Card title={item.title} key={index} md={4}>

                    <Typography variant="body1">
                        {item.text}
                    </Typography>

                </Card>

            ))}

        </SectionColumn>
    )
}

export default AboutMe
