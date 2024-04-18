/* eslint-disable react/no-unescaped-entities */
import { useEffect } from 'react';
import ElementWithHint from '../../../../ui/ElementWithHint/ElementWithHint';
import Stars from '../../../../ui/Stars/Stars';
import { useInView } from 'react-intersection-observer';

const Chapter1 = ({ setIsVisible, isVisible }) => {
  const { ref: firstRef, inView: firstVisible } = useInView();
  const { ref: secondRef, inView: secondVisible } = useInView();
  const { ref: thirdRef, inView: thirdVisible } = useInView();

  useEffect(() => {
    if (firstVisible || secondVisible || thirdVisible) {
      if (firstVisible) {
        setIsVisible({
          ...isVisible,
          first: true
        });
      }

      if (secondVisible) {
        setIsVisible({
          ...isVisible,
          second: true
        });
      }

      if (thirdVisible) {
        setIsVisible({
          ...isVisible,
          third: true
        });
      }
    }

  }, [firstVisible, secondVisible, thirdVisible]);

  return (
    <div className='App__main'>
      <section className="App__section">
        <div>
          <ElementWithHint
            title="ARTICLE I"
          >
            Article I Chapter 1 lists
            all zoning districts and describes how
            the rules of the Zoning Resolution
            should be interpreted. The Proposal
            modifies some existing districts and
            creates new ones. It also includes
            special text for other projects
            undergoing public review at the same
            time as the Proposal.
          </ElementWithHint>
          <h4>GENERAL PROVISIONS</h4>
        </div>

        <h4>
          Chapter 1
          <br />
          Title, Establishment of Controls and Interpretation of Regulations
        </h4>
      </section>

      <Stars />

      <section className="App__section" id="11-10">
        <div>
          <h4>11-10</h4>
          <h4>
            ESTABLISHMENT AND SCOPE OF CONTROLS,
            ESTABLISHMENT OF DISTRICTS,
            AND INCORPORATION OF MAPS
          </h4>
        </div>
      </section>

      <Stars />

      <section className="App__section" id="11-12">
        <div>
          <h4>11-12</h4>
          <h4>Establishment of Districts</h4>
        </div>
      </section>

      <Stars />

      <section className="App__section" id="11-122">
        <div>
          <ElementWithHint
            title="11-122"
          >
            The Proposal establishes a
            series of new mid- and high-density
            districts.
          </ElementWithHint>
          <h4>Districts established</h4>
        </div>

        <p className="text-center">
          [ALIGNING WITH PROPOSAL TO INCLUDE ADDITIONAL HOUSING TYPES IN
          EXISTING DISTRICTS AND CREATE NEW DISTRICTS]
        </p>

        <p>
          In order to carry out the purposes and provisions
          of this Resolution, the following districts are
          hereby established:
        </p>

        <p>Residence Districts</p>
      </section>

      <Stars />

      <section className="App__section">
        <div className="App__list">
          <ul>
            <li>R6</li>
            <li>R6-1</li>
            <li className="text-underlined">R6A</li>
            <li>R6B</li>
            <li className="text-underlined">R6D</li>
          </ul>
          <ul>
            <li>General Residence District</li>
            <li className="text-underlined">General Residence District</li>
            <li>General Residence District</li>
            <li>General Residence District</li>
            <li className="text-underlined">General Residence District</li>
          </ul>
        </div>

        <div className="App__list">
          <ul>
            <li>R7-1</li>
            <li>R7-2</li>
            <li>R7-3</li>
            <li>R7A</li>
            <li>R7B</li>
            <li>R7D</li>
            <li>R7X</li>
          </ul>

          <ul>
            <li>General Residence District</li>
            <li>General Residence District</li>
            <li>General Residence District</li>
            <li>General Residence District</li>
            <li>General Residence District</li>
            <li>General Residence District</li>
            <li>General Residence District</li>
          </ul>
        </div>

        <div className="App__list">
          <ul>
            <li>R8</li>
            <li>R8A</li>
            <li>R8B</li>
            <li>R8X</li>
          </ul>

          <ul>
            <li>General Residence District</li>
            <li>General Residence District</li>
            <li>General Residence District</li>
            <li>General Residence District</li>
          </ul>
        </div>

        <div className="App__list">
          <ul>
            <li>R9</li>
            <li>R9-1</li>
            <li>R9A</li>
            <li>R9D</li>
            <li>R9X</li>
          </ul>

          <ul>
            <li>General Residence District</li>
            <li>General Residence District</li>
            <li>General Residence District</li>
            <li>General Residence District</li>
            <li>General Residence District</li>
          </ul>
        </div>

        <div className="App__list">
          <ul>
            <li>R10</li>
            <li>R10A</li>
            <li>R10H</li>
            <li>R10X</li>
          </ul>
          <ul>
            <li>General Residence District</li>
            <li>General Residence District</li>
            <li>General Residence District</li>
            <li>General Residence District</li>
          </ul>
        </div>

        <div className="App__list">
          <ul>
            <li className="text-underlined">R11</li>
            <li className="text-underlined">R11A</li>
          </ul>
          <ul>
            <li className="text-underlined">General Residence District</li>
            <li className="text-underlined">General Residence District</li>
          </ul>
        </div>

        <div className="App__list">
          <p className="text-underlined">R12</p>
          <ul>
            <li className="text-underlined">General Residence District</li>
          </ul>
        </div>

        <p style={{ marginTop: '12px' }}>Commercial Districts</p>
      </section>

      <Stars />

      <section className="App__section">
        <div className="App__list">
          <ul>
            <li>C4-1</li>
            <li>C4-2</li>
            <li>C4-2A</li>
            <li>C4-2F</li>
            <li>C4-3</li>
            <li>C4-3A</li>
            <li>C4-4</li>
            <li>C4-4A</li>
            <li>C4-4D</li>
            <li>C4-4L</li>
            <li>C4-5</li>
            <li>C4-5A</li>
            <li>C4-5D</li>
            <li>C4-5X</li>
            <li>C4-6</li>
            <li>C4-6A</li>
            <li>C4-7</li>
            <li>C4-7A</li>
            <li className="text-underlined">C4-8</li>
            <li className="text-underlined">C4-9</li>
            <li className="text-underlined">C4-11</li>
            <li className="text-underlined">C4-11A</li>
            <li className="text-underlined">C4-12</li>
          </ul>
          <ul>
            <li>General Commercial District</li>
            <li>General Commercial District</li>
            <li>General Commercial District</li>
            <li>General Commercial District</li>
            <li>General Commercial District</li>
            <li>General Commercial District</li>
            <li>General Commercial District</li>
            <li>General Commercial District</li>
            <li>General Commercial District</li>
            <li>General Commercial District</li>
            <li>General Commercial District</li>
            <li>General Commercial District</li>
            <li>General Commercial District</li>
            <li>General Commercial District</li>
            <li>General Commercial District</li>
            <li>General Commercial District</li>
            <li>General Commercial District</li>
            <li>General Commercial District</li>
            <li className="text-underlined">General Commercial District</li>
            <li className="text-underlined">General Commercial District</li>
            <li className="text-underlined">General Commercial District</li>
            <li className="text-underlined">General Commercial District</li>
            <li className="text-underlined">General Commercial District</li>
          </ul>
        </div>
      </section>

      <Stars />

      <section className="App__section">
        <div className="App__list">
          <ul>
            <li>C6-1</li>
            <li>C6-1A</li>
            <li>C6-1G</li>
            <li>C6-2</li>
            <li>C6-2A</li>
            <li>C6-2G</li>
            <li>C6-2M</li>
            <li>C6-3</li>
            <li>C6-3A</li>
            <li>C6-3D</li>
            <li>C6-3X</li>
            <li>C6-4</li>
            <li>C6-4.5</li>
            <li>C6-4A</li>
            <li>C6-4M</li>
            <li>C6-4X</li>
            <li>C6-5</li>
            <li>C6-5.5</li>
            <li>C6-6</li>
            <li>C6-6.5</li>
            <li>C6-7</li>
            <li>C6-7.5</li>
            <li>C6-7T</li>
            <li>C6-8</li>
            <li>C6-9</li>
            <li className="text-underlined">C6-11</li>
            <li className="text-underlined">C6-12</li>
          </ul>
          <ul>
            <li>General Central Commercial District</li>
            <li>General Central Commercial District</li>
            <li>General Central Commercial District</li>
            <li>General Central Commercial District</li>
            <li>General Central Commercial District</li>
            <li>General Central Commercial District</li>
            <li>General Central Commercial District</li>
            <li>General Central Commercial District</li>
            <li>General Central Commercial District</li>
            <li>General Central Commercial District</li>
            <li>General Central Commercial District</li>
            <li>Restricted Central Commercial District</li>
            <li>Restricted Central Commercial District</li>
            <li>General Central Commercial District</li>
            <li>General Central Commercial District</li>
            <li>General Central Commercial District</li>
            <li>General Central Commercial District</li>
            <li>Restricted Central Commercial District</li>
            <li>General Central Commercial District</li>
            <li>Restricted Central Commercial District</li>
            <li>General Central Commercial District</li>
            <li>Restricted Central Commercial District</li>
            <li>Restricted Central Commercial District</li>
            <li>General Central Commercial District</li>
            <li>General Central Commercial District</li>
            <li className="text-underlined">General Commercial District</li>
            <li className="text-underlined">General Commercial District</li>
          </ul>
        </div>
      </section>

      <section className="App__section">
        <p>Special Purpose Districts</p>

        <p className="text-center">[UPDATING CROSS REFERENCES]</p>
      </section>

      <Stars />

      <section className="App__section">
        <p>Establishment of Special Limited Commercial District</p>
        <p>In order to carry out the special purposes of this Resolution as set forth in Article VIII, Chapter</p>
        <p>3, the #Special Limited Commercial District# is hereby established</p>
      </section>

      <section className="App__section">
        <p>Establishment of Limited Height Districts</p>
        <p>The following are hereby established as #Limited Height Districts# to which the provisions of
          <span className="text-crossed"> Sections 23-691</span>,<span className="text-underlined">
            paragraph (c) of Section 23-444 (Special provisions in other geographies Sections
          </span>),
          24-591, <span className="text-crossed">or</span> 33-491 <span className="text-crossed">or 43-49</span> (Limited Height Districts) shall apply either directly or in
          other provisions of this Resolution, where they are incorporated by cross-reference:
        </p>

        <ul style={{ paddingLeft: '10%' }}>
          <li>LH-1 Limited Height District No. 1</li>
          <li>LH-1A Limited Height District No. 1A</li>
          <li>LH-2 Limited Height District No. 2</li>
          <li>LH-3 Limited Height District No. 3</li>
        </ul>

        <p>Establishment of the Special Lincoln Square District</p>
        <p>
          In order to carry out the special purposes of this Resolution as set forth in Article VIII, Chapter
          2, the #Special Lincoln Square District# is hereby established.
        </p>
      </section>

      <Stars />

      <h4 ref={firstRef} id="11-30">
        11-30
        <br />
        BUILDING PERMITS ISSUED BEFORE EFFECTIVE DATE OF AMENDMENT
      </h4>

      <section className="App__section" id="11-31">
        <ElementWithHint
          title="11-31"
        >
          The Proposal clarifies how
          vesting rules are meant to apply on
          multi-building sites. Errant language
          can force sites out of compliance if a
          new building abuts an earlier building.
        </ElementWithHint>
        <h4>General Provisions</h4>

        <p>
          For the purposes of Section 11-33, relating to Building Permits Issued before Effective Date of
          Amendment to this Resolution, the following terms and general provisions shall apply:
        </p>
      </section>

      <section className="App__section">
        <div className="App__list">
          <ul style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <li>(a)</li>
            <li>(b)</li>
            <li>(c)</li>
          </ul>
          <ul style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            <li>
              A lawfully issued building permit shall be a building permit which is based on an
              approved application showing complete plans and specifications, authorizes the entire
              construction and not merely a part thereof, and is issued prior to any applicable
              amendment to this Resolution. In case of dispute as to whether an application includes
              "complete plans and specifications" as required in this Section, the Commissioner of
              Buildings shall determine whether such requirement has been met.
            </li>
            <li>
              The rights set forth in these Sections shall be retained only if all modifications, made in
              such plans after the effective date of any applicable amendment to this Resolution, do not
              create a new #non-compliance# or #non-conformity# or increase the degree of #noncompliance# or #non-conformity# with the provisions of this Resolution, as amended.
            </li>
            <li>
              For the purposes of this paragraph (c), #abutting buildings# on a single #zoning lot# shall
              be considered to be a single #building#. As used in Section 11-33 (Building Permits for
              Minor or Major Development or Other Construction Issued before Effective Date of
              Amendment):
            </li>
          </ul>
        </div>
      </section>

      <p>(1) “minor development” shall include:</p>

      <Stars />

      <h4 ref={secondRef} id="11-40">
        11-40
        EXCEPTIONS, VARIANCES, AUTHORIZATION OR PERMITS
      </h4>

      <section className="App__section" id="11-46">
        <ElementWithHint
          title="11-46"
        >
          The Proposal includes
          special vesting text allow projects
          undergoing public review to continue
          under the current zoning rules. This can
          limit confusion during their review
          process as the Proposal goes through its
          own public review.
        </ElementWithHint>
        <p className='text-center text-underlined'>
          [NEW TEXT]
        </p>

        <p className='text-underlined'>
          If, on or before [date of adoption], an application for an authorization or special permit has been
          certified or referred by the City Planning Commission or has been filed with the Board of
          Standards and Appeals, such application may continue pursuant to the rules in effect at the time
          such authorization or special permit was certified or referred by the Commission or filed with the
          Board. Such authorizations or special permits, if granted by the Commission or Board, may be
          started or continued, in accordance with the terms thereof, or as such terms may be subsequently
          modified, pursuant to the regulations in effect at the time such authorizations or special permits
          were certified or referred by the Commission or filed with the Board.
        </p>
      </section>

      <h4 ref={thirdRef} id="11-50">11-50 SEPARABILITY</h4>

      <Stars />
    </div>
  );
};

export default Chapter1;