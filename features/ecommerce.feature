Feature: Ecommerce validation

@smoke
Scenario: placing the order
   Given a login to Ecommerce application with "rajatv32@gmail.com" and "Rajat@1234"
   When Add "zara coat 3" to cart
  
Scenario Outline: Facebook login
   Given a login to Facebook application with "<username>" and "<password>"
   # When user click on create account button

   Examples: 
   | username        | password     |
   | rajatv32@gmail.com  |Rajat@1234  |

      



#    Execution
#    Scenario 1: placing the order
# Hook: Before
# Launches a Chromium browser in non-headless mode.
# Creates a new browser context and a new page.
# Initializes PageObjManager and attaches it to this.POManager.
            # Step 1: Given a login to Ecommerce application...
# Executes the corresponding step definition using the provided credentials.
            # Step 2: When Add "zara coat 3" to cart
# Executes the step definition to add the item to the cart.
# Hook: AfterStep

# After each step, checks if the step failed.

# If failed, takes a screenshot named screenshot.png.

# Hook: After

# Prints After method.

# Scenario Outline 2: Facebook login

# Since there is 1 row in the Examples table, this scenario will run once with:

# username = ekta@gmail.com

# password = Iamking@000

# Hook: Before

# Again launches a new browser, context, and page.

# Initializes PageObjManager again.

# Step: Given a login to Facebook application...

# Executes the step definition using the provided credentials.

# Hook: AfterStep

# Takes a screenshot only if the step fails.

# Hook: After

# Prints After method

   
   