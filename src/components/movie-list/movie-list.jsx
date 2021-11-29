import react from "react";
import { Movie } from '../movie-component/movie';
import './movie-list.styles.css';

/*
 also for the layout of the list:
 think that the API maybe will fetch 100+ movies..
 UI/UX wise the user will have to scroll for ever.. 
 maybe a small fix to height of the list? or a button to 
 bring users to the top to see their basket? 
*/ 
export const MoviesList = (props) => (
    
    <div className="movie-list">
        {
            props.movies.map(({ id, ...otherItemProps }) => (              
                 <Movie key={id} {...otherItemProps} />                
            ))
        }
    </div>       
);
