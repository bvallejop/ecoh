# Dotenv
activate :dotenv

# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions

activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

# Layouts
# https://middlemanapp.com/basics/layouts/

# Per-page layout changes
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
page '/index.html', :layout => "principal"
page '/contacto.html', :layout => "principal"
page '/nosotros.html', :layout => "principal"
page '/proyecto.html', :layout => "proyectos"

# Proxy pages
# https://middlemanapp.com/advanced/dynamic-pages/

data.sitio.proyecto.each do |id, proyecto|
  proxy "/proyectos/#{id}/index.html", "/proyecto.html", :locals => { :proyecto => proyecto }, :ignore => true
end

# Helpers
# Methods defined in the helpers block are available in templates
# https://middlemanapp.com/basics/helper-methods/

# helpers do
#   def some_helper
#     'Helping'
#   end
# end

# Build-specific configuration
# https://middlemanapp.com/advanced/configuration/#environment-specific-settings

# configure :build do
#   activate :minify_css
#   activate :minify_javascript
# end

# Contentful
activate :contentful do |f|
  f.space         = { sitio: ENV["SPACE_ID"] }
  f.access_token  = ENV["ACCESS_TOKEN"]
  f.cda_query     = { limit: 1000 }
  f.rebuild_on_webhook = true
  f.content_types = {
    proyecto: "proyecto",
    nosotros: "nosotros",
  }
end