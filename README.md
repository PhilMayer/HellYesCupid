# HellYesCupid

[Demo HellYesCupid](http://hellyescupid.com)

![signup](app/assets/images/hell_yes_landing.png)

## Abstract
OkCupid always seemed to produce the best dates. Its wealth of information and matching algorithm are indispensable to the bachelor or bachelorette wanting to distinguish between a good date and one so bad you might need to leave before even asking their favorite karaoke song.

It was in this spirit that I set out to clone one of my very favorite apps. The final product is HellYesCupid, a dating web app that allows lovers to view and filter matches, answer match questions, and message potential future spouses or spurned ex-es.

## Architecture

### Backend
HellYesCupid relies on Ruby on Rails and PostgreSQL to deal with authentication and data retrieval and updating.

### Frontend
The frontend of HellYesCupid is but a single page, constructed using the React.js library and Redux framework.

## Matches
In the “Browse Matches” section of the app, HellYesCupid serves the user matches based on their sexual preference and gender orientation. Users can then further filter by age or by distance.

```ruby
@matches = User.where(:age => (min_age)..(max_age)).where.not(:id => current_user.id).where(:gender => current_user.preference).within(distance, :origin => current_user)
```

## Questions
In order to determine their fit with another person, users can answer personality questions. These work as follows:

1. Users choose one answer to the question
2. Users choose among which answers they find acceptable (e.g. how many times a day do you brush your teeth?)
3. Users weigh the question based on how much bearing the question has on their everyday lives. The weightings are:

* 1 for not important
* 10 for a little important
* 50 for somewhat important
* 100 for very important

## The Matching Algorithm
When two people have answered identical questions, the matching algorithm kicks in. It works like this:

1. We first add up all of the points given to my questions, where the points are simply the weights outlined above.
2. We determine if your answer was in my list of acceptable answers. If so, you get those points for the question (1, 10, 50 or 100).
3. The number of points you scored out of my total possible number of points is your match percentage with me.
4. We repeat the process, except now our roles are reversed (we check your acceptable answers against my answers).
5. With the two match percentages in hand, we multiply them and take the nth root of the result, where n is the number of questions examined. If, at this point, you’re saying to yourself, “well that’s just a geometric mean!” you’d be spot on.

```javascript
const match_percentage = Math.pow(product, 1 / numQuestions) * 100;
return Math.round(match_percentage);
```

And that’s how the matching algorithm works.

## Profiles
Each user has their very own profile, where they can answer or not answer questions common to all profiles. They can also upload and re-upload a single profile picture.

## Messages

![Messages](app/assets/images/messages.gif)

Messages are created by hitting the “Message” button on another user’s profile, at which point a thread is created and the two lovers can chat for as long as their hearts desire.

## Libraries to Thank
The following libraries contributed heavily to the development of HellYesCupid, and are hereby thanked for their services:

- [React.js](https://facebook.github.io/react/)
- [Redux](http://redux.js.org/)
- [BCrypt](https://github.com/codahale/bcrypt-ruby) for password hashing
- [Paperclip](https://github.com/thoughtbot/paperclip) for image uploading
- [Figaro](https://github.com/laserlemon/figaro) for storing AWS keys
- [Rheostat](https://github.com/airbnb/rheostat) for that excellent slider to filter by distance
- [Geokit-Rails](https://github.com/geokit/geokit-rails) to filter by distance
- [Jbuilder v. 2.5](https://github.com/rails/jbuilder) Really can’t say enough about this one.


## Future Development
These are some features that HellYesCupid would definitely stand to benefit from going forward:

* More options for sexuality and gender.
	* This was sadly beyond the scope of the MVP, but is first on the list for post-MVP development.

* Uploading of multiple photos.
	* Given that you would never really date someone based on a single photo, this seems fairly essential.

* Live chat
	* For obvious reasons.

* Likes
	* Similarly obvious.
