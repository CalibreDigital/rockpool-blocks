# Production checklist
Some simple steps to follow before making a site visible to the public.

## On the Flywheel control panel:
* Set rockpool.uk.com as primary domain
* Turn off privacy mode
* Activate SSL under "add-ons" section
* Create a fresh backup
* Ensure that WP_DEBUG and development mode are turned off under "settings"

## On the Wordpress dashboard:
* Ensure that all plugins and Wordpress core is up to date
* Caching plugin (such as WP Super Cache) installed and turned on
* Ensure that "search engine visibility" is unticked under Settings > Reading

## Elsewhere:
* Ensure that new permanent domain (rockpool.uk.com) DNS settings point at Flywheel servers
* Check that traffic can be monitored in analytics packages like Google Analytics
