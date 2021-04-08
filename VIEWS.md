# Dashboard

- `/`
  - given day's orders stats (delivery and local)
  - given day's bookings and events list

# Sign in view

- `/login`
  - login and password inputs
  - login button (linking back to dashboard)

# Tables availability view

- `/tables`
  - date and time choosing widget
  - bookings and events list (table form)
    - single col = 1 table
    - single row = 30 mins
    - Google's calendar's week view lookalike (cols - tables instead of days, after choosing booking or event, we're redirected to details subpage )
- `/tables/booking/:id`
  - needs to have all info regarding booking
  - needs to allow for edits and implementing changes
- `/tables/booking/new`
  - as above - minus intro info
- `/tables/events/:id`
  - as above - but for events
- `/tables/events/new`
  - as above - but for events, minus intro info

# Waiter's view

- `/waiter`
  - table form
    - rows are tables
    - cols are different kinds of info (ie state, time since last activity),
    - last col - given table's available actions
- `/waiter/order/new`
  - table's number (needs to allow for edit)
  - menu (available products)
  - chosen product's options
  - order (ordered products with options and price)
  - order's summed up price
- `/waiter/order/:id`
  - as above

# Kitchen's view
- `/kitchen`
  - shows orders in chronological order
  - list needs to include:
    - table's number (or delivery's id) and full info re ordered dishes
  - list needs to allow for marking the order as done
