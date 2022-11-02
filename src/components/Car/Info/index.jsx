import React from 'react';

//assets
import carHeader from './../../../assets/images/carHeader.jpeg';

// styles
import {
    InfoContainer,
    Wrap,
    Image,
    Header,
    Description,
    Container,
} from './styled';

const Info = () => {
    return (
        <Container>
            <InfoContainer>
                <div>
                    <Image src={carHeader} />
                </div>
                <Wrap>
                    <Header>Автомобіль, непідвладний часу</Header>
                    <Description>Новий 911 увібрав риси всіх своїх попередників: він нагадує про минуле та дає уявлення про майбутнє. Силует: культовий.
                        Дизайн: класика, що не старіє. Технології: завжди на крок попереду, але неможливі без спортивних перемог минулого.
                        Ми рухаємось у  майбутнє на 911 восьмого покоління.</Description>
                </Wrap>
            </InfoContainer>
        </Container>
    );
};

export default Info;
