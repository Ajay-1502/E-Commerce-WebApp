import { Container, Col, Row, Image } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="py-5">
      <h2
        className="text-center mb-5 fw-bold"
        style={{ fontFamily: 'Metal Menia,cursive' }}
      >
        About
      </h2>
      <Row className="align-items-start g-0">
        <Col md={4} className=" text-center mb-4 mb-md-0">
          <Image
            src="https://prasadyash2411.github.io/ecom-website/img/Band%20Members.png"
            roundedCircle
            fluid
            style={{ width: '200px', height: '200px', objectFit: 'cover' }}
          />
        </Col>
        <Col md={8} style={{ marginBottom: '50px' }}>
          <p>
            <strong>The Generics</strong> is more than just a rock band — we're
            a rebellion set to music. Formed in the underground scene of
            Bangalore, our sound blends raw guitar riffs, soul-punching vocals,
            and stories that hit home.
          </p>
          <p>
            Over the years, we’ve rocked hundreds of stages, built a community
            of die-hard fans, and released albums that speak to the hearts of
            misfits and dreamers alike. Now, we’re bringing that same energy
            online — not just to share our music, but to connect directly with
            you.
          </p>
          <p>
            This webapp is your backstage pass: grab our latest albums, stream
            exclusive tracks, and check out our official band merchandise.
            Whether you’ve been moshing with us since day one or just joined the
            tribe — welcome to the chaos.
          </p>
          <p>
            <strong>Stay loud. Stay real. Stay Generic. 🤘</strong>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
