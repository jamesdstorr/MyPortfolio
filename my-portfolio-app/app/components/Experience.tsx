import React from 'react';

const Experience = () => {

    const sapmpleText:string = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. `
    return (
        <>
            <ul>
                <li>
                    <div>
                        <h2>Software Engineer Manager</h2>
                        <p>{sapmpleText}</p>
                    </div>
                </li>
                <li>
                    <div>
                        <h2>Azure Architect</h2>
                        <p>{sapmpleText}</p>
                    </div>
                </li>
                <li>
                    <div>
                        <h2>Cloud Solution Designer</h2>
                        <p>{sapmpleText}</p>
                    </div>
                </li>
            </ul>
        </>
    );
};

export default Experience;
