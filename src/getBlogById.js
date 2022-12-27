import stableDiff from './images/stable-diff-Copy.png';
import chatGptMatrix from './images/ChatGptExample1-Copy.png';
import chatGptAccordian from './images/chatGptExample2-Copy.png';
import { insertLineBreaks } from './insertLineBreaks';
import chatGptBlog from './images/ChatGptExample3.png'
import chatGptBlogQuestion from './images/ChatGptQuestion-1.png'
import chatGptBlogResponseOne from './images/chatGptResponse-2.png'
import chatGptBlogResponseTwo from './images/chatGptResponse-1.png'
import errorOne from './images/error.png'
import codeBlockPrompt from './images/codeBlock-prompt.png'
// import myBlogs from './myBlogs'



export const getBlogById = (id) => {
    const blogs = [
        {
            date: '12/15/2022',
            emoji: '👏 😎',
            title: "First Entry",
            content: insertLineBreaks("I created this website with the help of a powerful AI assistant. I asked the assistant a few questions, such as how to create a React blog component using React Bootstrap, and it provided me with clear, concise answers.   I was impressed by the assistants knowledge and ability to generate human-like text on the fly. Its truly amazing what AI can do these days!    Overall, I'm very happy with the results of using AI to help me create this website. It saved me a lot of time and effort, and I'm excited to see what else I can do with it."),
            image: chatGptMatrix,
            imageCaption: "Screenshot of some of my conversation with ChatGpt when creating the background component",
            id: '1'
        },
        {
            date: '12/16/2022',
            emoji: '🤓 👹',
            title: "Messing with Font",
            content: insertLineBreaks("Today, I spent some time working on my personal website and I wanted to create a nice title component to use on the splash screen. I decided to use Google Fonts to add some personality to the text, and after trying out a few different options, I finally settled on the Rubik 80s Fade font.  I imported the font into my React component using the @import rule in my CSS, and then applied it to the text using the font-family property. I also added some styling to make the font larger and bolder, and used some emoji's to give it a fun, playful vibe.  I was really happy with how the title component turned out, and I think it will really help to make my website stand out. In the end, I was also able to use the Accordion component from the react-bootstrap library to create a stylish and functional way to display my blog posts. Overall, it was a really productive day of work on my website and I'm excited to see how everything comes together in the end."),
            image: chatGptAccordian,
            imageCaption: "Screenshot of some of my conversation with ChatGpt when working on the blog component you are reading!",
            id: '2'
        },
        {
            date: '12/17/2022',
            emoji: '🖌 🔨',
            title: "Made some more pictures and stuff",
            content: insertLineBreaks("I recently had the opportunity to talk with an AI assistant named Assistant to create prompts for my latest art project. I was fascinated by the idea of using AI to generate unique and creative ideas for my art, and I was eager to see what kind of results I could achieve.To create the prompts, I asked Assistant to describe various scenes and settings to me, ranging from woodland mountains on a sunny day to old polaroid photographs of fictional characters. With each prompt, I tried to focus on specific details and elements that would inspire my creativity.  Once I had a list of prompts, I used AI software to generate art based on those prompts. The process was fascinating, and I was pleasantly surprised by the results. The AI-generated art had a unique, abstract quality that I found inspiring, and I was able to use it as a starting point for my own creations. I was so happy with the results of this project that I decided to showcase the AI-generated art on my website. However, when it came time to modify the website's navbar to accommodate the new art, I ran into some issues. The AI-generated code was not quite up to par, and I had to spend some time manually adjusting the navbar to get it just right.   Despite the extra work, I am thrilled with the final results of this project. Using AI to generate prompts for my art was a new and exciting experience, and I can't wait to see what other creative projects I can come up with using this approach. If you're interested in seeing the results of this project, be sure to check out my website!"),
            image: stableDiff,
            imageCaption: "Screenshot of me using a stable diffusion model with prompts from chatGpt",
            id: '3'
        }
        ,
        {
            date: '12/24/2022',
            emoji: ' 🧾🧾🔨⚙️ ',
            title: "Updating my Blog Section",
            //         content:  [
            //             "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula dui et lacus aliquet, at finibus est placerat. Donec tempus leo sed massa vestibulum, eget dignissim eros ultricies. Mauris consequat risus felis, id ultricies nibh vestibulum eu.",
            //             {
            //               image: chatGptBlog,
            //               imageCaption: 'Caption for image 1'
            //             },
            // (            "Suspendisse in sem id quam porta malesuada. Sed posuere sollicitudin tempus. Morbi ac enim id lectus lobortis viverra non ac metus. Morbi euismod, massa et suscipit imperdiet, nisl justo scelerisque urna, sed tincidunt diam orci quis est. Praesent quis elementum justo. Ut id malesuada sem, at vehicula massa. Sed vel aliquet erat. Ut a orci auctor, placerat orci id, vehicula magna. Duis auctor elit quis arcu elementum, a accumsan nisi lobortis."),
            //             {
            //               image: chatGptBlog,
            //               imageCaption: 'Caption for image 2'
            //             },
            //             "Etiam porta mi at mi viverra, a eleifend tellus fermentum. Integer ac nulla auctor, convallis magna eu, semper velit. Maecenas euismod, metus ut hendrerit ultricies, turpis metus ornare ligula, et ornare enim ante a ligula. Curabitur fringilla metus nec arcu facilisis, vel tincidunt velit sollicitudin. Fusce vel ante vel ligula maximus facilisis. Sed ut aliquet lacus. Praesent euismod lacus id nisl facilisis, eu lobortis lectus bibendum. Aenean a turpis non orci placerat pellentesque. Check out this website: <a href='https://www.example.com'>Example</a>"
            //         ],
            content: insertLineBreaks("Today, I had a conversation with an AI assistant to update the blog section on my website. The previous design had all the blogs displayed in an accordion, but I wanted to display each blog card in a responsive grid with only the image, date, and title shown. When a user clicks on a card, I wanted it to link to a new page where the blog card component takes up the whole page. The AI assistant provided me with the updated code for the Blog component, which now displays the blog cards in a responsive grid using the Card and Col components from react-bootstrap. Each card has a link to a new page, which is implemented using the Link component from react-router-dom. To display the full content of a blog on the new page, the AI assistant also showed me how to use the getBlogById function to retrieve the specific blog from the blogs array based on the id parameter in the URL. This function can be used in the new BlogCard component to display the full content of the blog.Overall, the AI assistant was very helpful in providing me with the updated code and guidance on how to implement the desired changes to the blog section of my website. With these updates, users can now easily browse and read my blogs in a more visually appealing and user-friendly way."),
            image: chatGptBlog,
            imageCaption: "Me using a stable diffusion model with prompts from chatGpt",
            id: '4'
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

                "The blog entry are you reading was written by a human, but the code was written by both man and machine. My goal with this entry is to show you the process I went through to update the blog component so that it shows more than one image, and is also able to contain links and code blocks. "
                +"I began with the following prompt for chatGPT : 'alter the following code so that the blog can contain any arbitrary number of images, and those images can be placed at different places between desired paragraphs of text. I also would like to be able to embed hyperlinks inside some of text blocks. All this should be optional'",
                {
                    image: chatGptBlogResponseOne,
                    imageCaption: 'the initial prompt response from chatGpt incuded a code example using my existing components',
                },
                'The reponse it gave seems like a reasonable solution, and we can extend this to have any arbitray component we would want to add to the blog in the future.',
                'Then i got the below error where my screen would not render.',
                {
                    image: errorOne,
                    imageCaption: 'The error is hard to read in this image but is : blog.content.map is not a function',
                },
                'When I gave the error back to chatGpt, it responsed with the below answer and code',
                {
                    image: chatGptBlogResponseTwo,
                    imageCaption: 'gpt reponses to me showing it the error',
                },
                'This fixed the issue. I asked some more questions to get the style right, and to also fix some bugs.',
                'Remember how I said we could extend this before? Well lets do that now by asking chatGpt to create a new codeBlock component for us',
                {
                    image: codeBlockPrompt,
                    imageCaption: 'Chatgpt giving my its first attempt at a code block component',
                },
                'This was pretty good and worked out the box, but It was not very good looking and there was no button for copying the contents. I asked it to give me a nicer looking style, and to adda copy button. ',
                'Below is the final code including the style.',
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
              'CodeBlock.js',
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
          'ImageCaption.js',
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
      'App.css',
      {
        code: `
     // rest of apps style...

/*code block style*/
.line-number {
  display: inline-block;
  width: 3em;
  text-align: right;
  margin-right: 0.5em;
  color: #aaa;
}

pre {
  white-space: pre-wrap;
  background-color: #f6f8fa;
  color: black;
  border-radius: 3px;
  padding: 1em;
}

.code-block {
  position: relative;
}

.copy-button {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background: transparent;
  color: #aaa;
  font-size: 0.8em;
  padding: 0.5em;
  cursor: pointer;
}
  `},

          'There a few known issues with this code. If the code block contains escape characters or sequences they will not be included in the code block' +
          '. Also the copy button copies the line numbers as well. These are problems for another time. As they say perfect is the enemy of finished.',
              'Code for this can be found here <a href="https://github.com/Agent215/chatGPTpersonalSite/tree/main/src/Components">click here for code</a>.',
            ],
            // content: insertLineBreaks("Today, I had a conversation with an AI assistant to update the blog section on my website. The previous design had all the blogs displayed in an accordion, but I wanted to display each blog card in a responsive grid with only the image, date, and title shown. When a user clicks on a card, I wanted it to link to a new page where the blog card component takes up the whole page. The AI assistant provided me with the updated code for the Blog component, which now displays the blog cards in a responsive grid using the Card and Col components from react-bootstrap. Each card has a link to a new page, which is implemented using the Link component from react-router-dom. To display the full content of a blog on the new page, the AI assistant also showed me how to use the getBlogById function to retrieve the specific blog from the blogs array based on the id parameter in the URL. This function can be used in the new BlogCard component to display the full content of the blog.Overall, the AI assistant was very helpful in providing me with the updated code and guidance on how to implement the desired changes to the blog section of my website. With these updates, users can now easily browse and read my blogs in a more visually appealing and user-friendly way."), 
            image: chatGptBlog,
            imageCaption: "Me using a stable diffusion model with prompts from chatGpt",
            id: '5'
        }
    ];

    // Find the blog with the matching id
    const blog = blogs.find((blog) => blog.id === id);

    return blog;
};
