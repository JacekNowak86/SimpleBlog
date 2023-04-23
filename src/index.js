class Post extends React.Component {
    constructor(props){
      super(props);
      this.state={
        showContent:false 
      };
    }
    showMoreContent(){
      this.setState({showContent:true});
    }
    render(){
      return ((<div>
        <h2>{this.props.title}</h2>
        
        {this.state.showContent?(<p>{this.props.content}</p>):(<div><button onClick={this.showMoreContent.bind(this)}>Czytaj więcej</button></div>)}
        
        <hr/>
        </div>)
        )}
    }
  
    
  const Blog = function(){
    const posts = [
      {
        title: "Przepis na naleśniki",
        id: 1,
        content: 'przygotować ciasto',
        
      },
      {
        title: "Przepis na kurczaka",
        id: 2,
        content: 'pokroić kurczaka, ...',
        
      }
    ];
    const postsList = posts.map(el=> <Post  key={el.id} {...el}/>);
    // content={el.content} key={el.id} title = {el.title} showContent={el.showContent}
  return (
    <div>
    <h1>To jest blog o gotowaniu</h1>
    {postsList}
      
        
        
    </div>
  );
}
ReactDOM.render(
  //React.createElement('h1',null,'Hello React')
  <Blog/>,
  document.getElementById('root')
);