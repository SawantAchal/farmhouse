import React from 'react'
const StyledHero = styled.header`
min-height: 60vh;
background: url(${props => props.img? props.img:defaultImg}) center/cover no-repeat;
display: flex;
align-items: center;
justify-content: center;
`;


export default StyledHero
