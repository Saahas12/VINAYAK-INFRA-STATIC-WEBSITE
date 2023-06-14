import styled from 'styled-components';

export const Box = styled.div`
padding: 80px 60px;
background: white;
background-repeat: no-repeat;
background-size: cover;
position: absolute;
width: 100%;


@media (max-width: 1180px) {
	.col{
	display: flex;
    flex-direction: columnn;
    margin-left: auto;
    margin-right: auto;
	}

	.foot1{
		text-align:center;
	}
}


`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
	/* background: red; */
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 60px;
`;

export const Row = styled.div`
display: grid;
margin-top:20px;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 20px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(167px, 1fr));

						

}
`;

export const FooterLink = styled.a`
color: #000;
margin-bottom: 20px;
font-size: 18px;
text-decoration: none;


&:hover {
	color: orange;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 24px;
color: #000;
margin-bottom: 40px;
font-weight: bold;
@media (max-width: 600px) {
	
	.foot1{
	text-align:center;}
}




`;

