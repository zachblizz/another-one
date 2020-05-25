# AnotherOne

Just a silly middleware for redux

----

### Usage

```javascript
import AnotherOne from 'another-one';

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), AnotherOne]
});
```
