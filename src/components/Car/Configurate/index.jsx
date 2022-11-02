import React from 'react';

// components
import Checkbox from '../../common/Checkbox';

// assets
import form from '../../../assets/images/form.webp';

// styles
import {
    ChangeConfig,
    ConfigHeader,
    Container,
    Content,
    Image,
    Colors,
    Color,
} from './styled';

const Configurate = ({
    colors,
    name,
    energy,
}) => {
    return (
        <Container>
            <Content>
                <div>
                    <Image src={form} width='100' height='100' />
                </div>
                <ChangeConfig>
                    <ConfigHeader>
                        color configurate
                    </ConfigHeader>
                    <Colors>
                        {
                            colors.map(({color, active}) => {
                                return (
                                    <Color color={color}>
                                        <Checkbox checked={active} />
                                    </Color>
                                );
                            })
                        }
                    </Colors>
                </ChangeConfig>
            </Content>
        </Container>
    );
};

export default Configurate;
