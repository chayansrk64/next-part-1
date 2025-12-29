import Title from '@/components/Title';
import React from 'react';

const TutorialPage = async({params}) => {
    const {slug} = await params;
    const [technology, topic, , page_no, subject] = slug || [];
    console.log(slug);
    
    return (
        <div>
            <Title>{technology} Tutorials</Title>
            <p>Topic: {topic}</p>
            <p>Page No: {page_no}</p>
            <p>Subject: {subject}</p>
        </div>
    );
};

export default TutorialPage;