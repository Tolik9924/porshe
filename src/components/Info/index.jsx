import React from 'react';

// styles
import {
    InfoContainer,
    Wrap,
    ImageContainer,
    Header,
    DescriptionContainer,
    Description,
    Container,
} from './styled';

const Info = () => {
    return (
        <Container>
            <InfoContainer>
                <ImageContainer></ImageContainer>
                <Wrap>
                    <Header>Автомобіль, непідвладний часу</Header>
                    <DescriptionContainer>
                        <Description>Новий 911 увібрав риси всіх своїх попередників: він нагадує про минуле та дає уявлення про майбутнє. Силует: культовий.
                            Дизайн: класика, що не старіє. Технології: завжди на крок попереду, але неможливі без спортивних перемог минулого.
                            Ми рухаємось у  майбутнє на 911 восьмого покоління.
                        </Description>
                    </DescriptionContainer>
                </Wrap>
            </InfoContainer>
        </Container>
    );
};

export default Info;
