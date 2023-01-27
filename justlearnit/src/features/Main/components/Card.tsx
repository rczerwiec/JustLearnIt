
interface ICard{
    post: {
        description: [],
        tag: string,
        title: string,
    };
    onClick: (p:{
        description: [],
        tag: string,
        title: string,
    }) => void;
    
}

function Card({post, onClick}:ICard){
    const renderedDescription = post.description.map((m: string) => {
        if(m.length<=100){
            return <div key="0" className="text-center text-sm m-4" dangerouslySetInnerHTML={{__html: m}}></div>;
        }else{
            let newM = m.slice(0,50);
            newM = newM+'<div>Read more...</div>'
            return <div key="0" className="text-center text-sm m-4" dangerouslySetInnerHTML={{__html: newM}}></div>;
        }

    })


    return(
        <div className="bg-grayMain m-4 rounded-md h-60 hover:cursor-pointer shadow-md" onClick={() => {onClick(post)}}>
            <div className="bg-graySecondary m-4 p-3 text-center text-3xl">{post.tag}</div>
            <div className="text-center text-xl">{post.title}</div>
            {renderedDescription}
            
        </div>
    )
}

export default Card;