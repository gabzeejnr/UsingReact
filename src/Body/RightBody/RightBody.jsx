import { name } from "../../AboutClient";
import './RightBody.css';
import ComponentWithUnderline from "./ComponentWithUnderline";


function RightBody() {
    return (
        <div id="right-body-wrapper">
            <div className="content">
                <p>{name.join(' ').toUpperCase()} has been actively practicing law for over 40 years, garnering the highest honors alongside countless trials in and around St. Charles County. Throughout his career, John has gathered the experience and knowledge necessary to navigate virtually any case within the fields of civil and criminal law. With over 40 years of courtroom experience, John has established himself as one of the leading litigators in the state of Missouri and is one of the few lawyers to be recognized nationwide with the highest possible legal ability and ethics rating, according to a prestigious national attorney rating organization.</p>
                <p>John is currently a principal in the Gartner Law Firm located in St. Peters where his primary area of practice has been general civil and criminal trial litigation. He has the ability to practice before all of the circuit courts within the state of Missouri, including the Missouri Court of Appeals of the Eastern District of Missouri, The U.S. Court of Appeals for the 8th Circuit, and the United States Supreme Court.</p>
                <p>His extensive experience in the court has made John a trial lawyer by trade, allowing him to successfully advise clients on matters of negotiation, mediation, arbitration, and litigation. John prides himself on offering skilled legal counsel so that his clients can feel both informed and secure in every single legal matter and decision. John ensures each and every client that he will take an active and personal role in every single case brought to the firm so that every client can get the absolute best representation the firm has to offer.</p>
                <p>JOHN L. MICHELS is currently a member of a number of state and national legal associations including the Missouri Bar Association, the St. Charles County Bar Association where he has served as president, the Criminal Bar Association of St. Charles County where he has served as secretary, and is a founding member of the Missouri Republican Attorneys for Civil Justice.</p>
                <p>In addition to his distinguished career of practicing law, John is also the proud husband of Chris Gartner. Together the two have raised three children and currently reside in the city of St. Charles. He currently serves as a board member of the United Way of Greater St. Louis and has served as a coach for the St. Charles West High School Mock Trial program, receiving the Journey to Excellence Award from the St. Charles school district.</p>
                <p>John prides himself on helping those in need and has always enjoyed fighting for the underdogs of the world. His relentless work ethic is driven by the opportunity to positively impact others and improve the community around him. He ensures every single client that they will be represented with honesty, integrity, and professionalism.</p>
                <ComponentWithUnderline title={'Bar & Court Admissions'} firstTitle={'Bar Admissions'}
                    items={['Missouri, 1980', 'U.S. District Court Eastern District of Missouri, 1982', 'U.S. District Court Western District of Missouri, 2006', 'U.S. Court of Appeals 8th Circuit, 1984', 'U.S. Supreme Court, 1984']} />
                <ComponentWithUnderline title={'Education, Professional Associations & Memberships'} firstTitle={'EDUCATION'}
                    items={["BA Political Science & Psychology – University of Missouri, St. Louis, Missouri, 1977", "Juris Doctor – Saint Louis University School of Law, St. Louis, Missouri, 1980", "Associates Degree Liberal Arts – Florissant Valley Community College, 1974"]} />
            </div>
        </div>
    );
}

export default RightBody;