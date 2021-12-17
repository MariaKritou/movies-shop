
**PREVIEW OF AUTHORIZATION-AUTHENTICATION BRANCH**
- Sign in page added with validation
- Username on header (when clicked logout fires)
- Private routing (only authenticated users can enter the page called: private, otherwise it redirects to signin page)
- Pagination bug fixed
- Search movies brings popular movies when searchfield is emptied
- Use of lodash-debounce for onChangeSearch (wait a few milisecs while users types)

**PREVIEW OF REACT-CONTEXT BRANCH**
- React context used: movie-context & cart-context
- Use of Axios
- Api fetch functions moved to its own file
- App is responsive on all screens
- Button to scroll to top added at the bottom of page
- Modal with movie details opens when the image of a movie in the list is clicked 
- Tonia's reviews completed

**PREVIEW OF CHANGES PHASE 4**
- Search movies starts when 3 or more letters are typed
- Pagination prev, next buttons added
- The pagination buttons if they are more than 5 they change to a different format to fit
- Movies with no photo show a default image instead of that small ugly thingy 
- Console warnings resolved
- The cart button changes from add to delete when you add that movie to the cart list
- Checkout button functionality with post (i think i sent the list with movies ids in post body but iam not sure, it works though)
- Toast notifications for success/error depending on post result
- If post returns true then cart list is emptied 
- Checkout button is disabled if cart is empty
- Footer added

**PREVIEW OF CHANGES PHASE 3**
- Searching movies from the search box
- Pagination if search result gives > 20 movies
- Sorting functionality from select box, on average vote or on popularity
- Add movie to the cart from the red cart button on the movie component
- Add/Remove movie from cart buttons
- Calculating a total price from a fixed price (api doesnt provide price) and show it in the cart
- Total movies in the cart appear on the header
- Showing messages for no results in movie search and empy cart


**RUNNING PROJECT:**<br>
You should run it on **Mozilla** or **Chrome**  (on microsoft edge UI has a few issues for now)<br>
To run the project you just use: <br>
yarn install <br>
yarn start <br>
My api key is already in the env file so no configuration is needed,<br>
if you want to use yours you can change it in the env file (REACT_APP_API).


**API CALL:**<br>
I used fetch but I wil try implementing it with Axios in the next phases

**BOOTSTRAP:**<br>
I used the vanilla bootstrap library V.5
