# Lab 8 - Ryan O'Toole
1) Automated tests should be run within a Github action, as that ensures that the tests are done as often as possible without anyone needing to remember to do them. Manually running them would also help, as that would make it less likely that new bugs are pushed.
2) Yes, if the function should have different results based on user action.
3) No, the message feature would require multiple components (writing, sending, receiving), where unit testing each component wouldn't indicate how they interact with each other
4) Yes, the max message length feature is a single component that doesn't significantly interact with other components