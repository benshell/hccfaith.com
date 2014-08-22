if (Drupal.jsEnabled) {
  $(document).ready(function() {
    // Find all the external links, the additional filter prevents IE from marking all links external
    var $links = $("a[@href^='https:']|[@href^='http:']").filter("a:not([@href^='" + Drupal.settings.extlink.baseUri + "'])");

    if (Drupal.settings.extlink.extClass) {
      // Apply the "ext" class to all links not containing images
      $links.filter("a:not([img])").addClass(Drupal.settings.extlink.extClass).end();
    }

    if (Drupal.settings.extlink.extTarget) {
      // Apply the target attribute to all links
      $links.attr('target', Drupal.settings.extlink.extTarget);
    }
  });
}