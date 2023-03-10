import stableDiff from './images/stable-diff-Copy.png';
import chatGptMatrix from './images/ChatGptExample1-Copy.png';
import chatGptAccordian from './images/chatGptExample2-Copy.png';
import chatGptBlog from './images/ChatGptExample3.png'
import { insertLineBreaks } from './insertLineBreaks';
import chatGptBlogQuestion from './images/ChatGptQuestion-1.png'
import chatGptBlogResponseOne from './images/chatGptResponse-2.png'
import chatGptBlogResponseTwo from './images/chatGptResponse-1.png'
import errorOne from './images/error.png'
import code from './images/code.jpg'
import blog from './images/blog.jpg'
import girl from './images/girl-celebrates.png'
import codeBlock from './images/codeBlock.png'
// import { conversation } from './text';


// load these from somewhere! or make an API!!!!!!
export const myBlogs = [
    {
        date: '12/15/2022',
        emoji: '👏 😎',
        title: "First Entry",
        content: insertLineBreaks("I created this website with the help of a powerful AI assistant. I asked the assistant a few questions, such as how to create a React blog component using React Bootstrap, and it provided me with clear, concise answers.   I was impressed by the assistants knowledge and ability to generate human-like text on the fly. Its truly amazing what AI can do these days!    Overall, I'm very happy with the results of using AI to help me create this website. It saved me a lot of time and effort, and I'm excited to see what else I can do with it."),
        image: girl,
        imageCaption: "Some of my conversation with ChatGpt when creating the background component",
        id: 1
    },
    {
        date: '12/16/2022',
        emoji: '🤓 👹',
        title: "Messing with Font",
        content: insertLineBreaks("Today, I spent some time working on my personal website and I wanted to create a nice title component to use on the splash screen. I decided to use Google Fonts to add some personality to the text, and after trying out a few different options, I finally settled on the Rubik 80s Fade font.  I imported the font into my React component using the @import rule in my CSS, and then applied it to the text using the font-family property. I also added some styling to make the font larger and bolder, and used some emoji's to give it a fun, playful vibe.  I was really happy with how the title component turned out, and I think it will really help to make my website stand out. In the end, I was also able to use the Accordion component from the react-bootstrap library to create a stylish and functional way to display my blog posts. Overall, it was a really productive day of work on my website and I'm excited to see how everything comes together in the end."),
        image: chatGptAccordian,
        imageCaption: "Some of my conversation with ChatGpt when working on the blog component you are reading!",
        id: 2
    },
    {
        date: '12/17/2022',
        emoji: '🖌 🔨',
        title: "Made some more pictures and stuff",
        content: insertLineBreaks("I recently had the opportunity to talk with an AI assistant named Assistant to create prompts for my latest art project. I was fascinated by the idea of using AI to generate unique and creative ideas for my art, and I was eager to see what kind of results I could achieve.To create the prompts, I asked Assistant to describe various scenes and settings to me, ranging from woodland mountains on a sunny day to old polaroid photographs of fictional characters. With each prompt, I tried to focus on specific details and elements that would inspire my creativity.  Once I had a list of prompts, I used AI software to generate art based on those prompts. The process was fascinating, and I was pleasantly surprised by the results. The AI-generated art had a unique, abstract quality that I found inspiring, and I was able to use it as a starting point for my own creations. I was so happy with the results of this project that I decided to showcase the AI-generated art on my website. However, when it came time to modify the website's navbar to accommodate the new art, I ran into some issues. The AI-generated code was not quite up to par, and I had to spend some time manually adjusting the navbar to get it just right.   Despite the extra work, I am thrilled with the final results of this project. Using AI to generate prompts for my art was a new and exciting experience, and I can't wait to see what other creative projects I can come up with using this approach. If you're interested in seeing the results of this project, be sure to check out my website!"),
        image: stableDiff,
        imageCaption: "Me using a stable diffusion model with prompts from chatGpt",
        id: 3
    } ,
       {
        date: '12/24/2022',
        emoji: ' 🧾🧾🔨⚙️ ',
        title: "Updating my Blog Section",
        content: insertLineBreaks("Today, I had a conversation with an AI assistant to update the blog section on my website. The previous design had all the blogs displayed in an accordion, but I wanted to display each blog card in a responsive grid with only the image, date, and title shown. When a user clicks on a card, I wanted it to link to a new page where the blog card component takes up the whole page. The AI assistant provided me with the updated code for the Blog component, which now displays the blog cards in a responsive grid using the Card and Col components from react-bootstrap. Each card has a link to a new page, which is implemented using the Link component from react-router-dom. To display the full content of a blog on the new page, the AI assistant also showed me how to use the getBlogById function to retrieve the specific blog from the blogs array based on the id parameter in the URL. This function can be used in the new BlogCard component to display the full content of the blog.Overall, the AI assistant was very helpful in providing me with the updated code and guidance on how to implement the desired changes to the blog section of my website. With these updates, users can now easily browse and read my blogs in a more visually appealing and user-friendly way."), 
        image: blog,
        imageCaption: "Me using a stable diffusion model with prompts from chatGpt",
        id: 4
    },
    {
        date: '12/27/2022',
        emoji: ' 🧾🧾🔨⚙️ ',
        title: "ChatGPT helping with the blog again",
        content: [
            {
                image: chatGptBlogQuestion,
                imageCaption: 'My initial promt I gave chatGPT included my code I wanted it to alter',
            },
            "The blog you are reading was written by a human, but the code was written by both man and machine. My goal with this entry is to show you the process I went through to update the blog component so that it shows more than one image, and is also able to contain links and code blocks. "
            +"I began with the following prompt for chatGPT : 'alter the following code so that the blog can contain any arbitrary number of images, and those images can be placed at different places between desired paragraphs of text. I also would like to be able to embed hyperlinks inside some of text blocks. All this should be optional'",
            {
                image: chatGptBlogResponseOne,
                imageCaption: 'initial prompt response from chatGpt',
            },
            'Then i got the below error where my screen would not render.',
            {
                image: errorOne,
                imageCaption: 'my error',
            },
            'chat GPT responsed with the below answer and code',
            {
                image: chatGptBlogResponseTwo,
                imageCaption: 'gpt reponses to me showing it the error',
            },
            'This fixed the issue. I asked some more questions to get the style right, and to also fix some bugs. Below is the final code that resulted, displayed in my new codeblock component.',
            'Blogpage.js.',
            {
                code: `
                import React from 'react';
                import { Card } from 'react-bootstrap';
                import { DiscussionEmbed } from 'disqus-react';
                import {getBlogById} from './../getBlogById'
                import { useParams } from "react-router-dom";
                import { CodeBlock } from './CodeBlock';
                import { ImageCaption } from './ImageCaption';
                
                const BlogPage = () => {
                    const { id } = useParams();
                    const blog = getBlogById(id);
                  
                    return (
                      <Card className="blog-card" style={{ margin: '1rem' }}>
                        <Card.Header>{blog.emoji}</Card.Header>
                        <Card.Body>
                          <h5 className="title">{blog.title}</h5>
                          <div className="content">
                            {blog.content.map((element, index) => {
                        if (typeof element === 'string' && element.includes('<a')) {
                              return (
                                <div key={index} dangerouslySetInnerHTML={{ __html: element }} />
                              );
                            } else if (typeof element === 'string') {
                              return <p key={index}>{element}</p>;
                            } else if (element.code) {
                              return <CodeBlock key={index} code={element.code} />;
                              } else {
                                return <ImageCaption key={index} image={element.image} imageCaption={element.imageCaption} />;
                              }
                            })}
                          </div>
                        </Card.Body>
                        <Card.Body>
                          <DiscussionEmbed
                            shortname="brahm"
                            config={{
                              url: window.location.href,
                              identifier: blog.id,
                              title: blog.title,
                            }}
                          />
                        </Card.Body>
                      </Card>
                    );
                  };
                  
                  export default BlogPage;
                
          `},
          'CodeBlock.js.',
          {
            code: `
            import React, { useRef } from 'react';

            export const CodeBlock = ({ code }) => {
              const lines = code.split('\n');
              const codeBlockRef = useRef(null);
            
              const copyCode = () => {
                const selection = window.getSelection();
                selection.removeAllRanges();
            
                const range = document.createRange();
                range.selectNodeContents(codeBlockRef.current);
                selection.addRange(range);
            
                document.execCommand('copy');
              };
            
              return (
                <div className="code-block">
                  <button className="copy-button" onClick={copyCode}>
                    Copy
                  </button>
                  <pre ref={codeBlockRef}>
                    {lines.map((line, index) => (
                      <div key={index}>
                        <span className="line-number">{index + 1}</span>
                        {line}
                      </div>
                    ))}
                  </pre>
                </div>
              );
            };   
      `},
      'ImageCaption.js.',
      {
        code: `
        import React from 'react';
        import { Card } from 'react-bootstrap';
        
        export const ImageCaption = ({ image, imageCaption }) => (
            <React.Fragment>
                <Card.Img src={image} alt={imageCaption} />
                <Card.Text className="image-caption">{imageCaption}</Card.Text>
            </React.Fragment>
        );      
  `},
      'There a few known issues with this code. If the code block contains any special characters they will not be included in the code block' +
      ' Also the copy button copies the line numbers as well. These are problems for another time. As they say perfect is the enemy of finished.',
          'Code for this can be found here <a href="https://github.com/Agent215/chatGPTpersonalSite/tree/main/src/Components">click here for code</a>.',
        ],
        // content: insertLineBreaks("Today, I had a conversation with an AI assistant to update the blog section on my website. The previous design had all the blogs displayed in an accordion, but I wanted to display each blog card in a responsive grid with only the image, date, and title shown. When a user clicks on a card, I wanted it to link to a new page where the blog card component takes up the whole page. The AI assistant provided me with the updated code for the Blog component, which now displays the blog cards in a responsive grid using the Card and Col components from react-bootstrap. Each card has a link to a new page, which is implemented using the Link component from react-router-dom. To display the full content of a blog on the new page, the AI assistant also showed me how to use the getBlogById function to retrieve the specific blog from the blogs array based on the id parameter in the URL. This function can be used in the new BlogCard component to display the full content of the blog.Overall, the AI assistant was very helpful in providing me with the updated code and guidance on how to implement the desired changes to the blog section of my website. With these updates, users can now easily browse and read my blogs in a more visually appealing and user-friendly way."), 
        image: code,
        imageCaption: "Asking ChatGpt for help with my website yet again. I want to add the ability to put hyperlinks and code blocks in my blog. Also having more than one image would be nice. Can it make my blog look legit?",
        id: '5'
    }
];
