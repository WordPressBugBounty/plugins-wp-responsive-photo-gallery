=== Photo Gallery Slideshow & Masonry Tiled Gallery ===
Contributors:nik00726
Tags: gallery, masonry, slideshow, video gallery, lightbox
Requires at least:3.5
Tested up to:7.1
Version:1.0.43
Stable tag:1.0.43
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Free WordPress photo gallery, slideshow and masonry gallery plugin with lightbox and video support (YouTube, Vimeo). Upgrade to Pro for more.

== Description ==

**Photo Gallery Slideshow & Masonry Tiled Gallery** is a free WordPress plugin for building a responsive photo gallery, image slideshow, and masonry tiled gallery — with a built-in lightbox for images and video (YouTube, Vimeo, Metacafe, DailyMotion). Add it to any post or page with a shortcode or the Gutenberg block, no coding required.

Two gallery types are included in one plugin:

* **Photo Gallery Slideshow** — a responsive slideshow with a main image panel and a thumbnail filmstrip. Manage any number of images, set slide speed and transitions, and preview the gallery before publishing.
* **Masonry Tiled Gallery** — a responsive masonry (tiled) image and video grid with a lightbox. Mix images, videos, and links in the same gallery; the video thumbnail, title, and description are fetched automatically for YouTube, Vimeo, and DailyMotion.

Both gallery types are fully responsive and mobile-friendly, and work with the WordPress Block Editor (Gutenberg), the classic editor, and PHP shortcodes in your theme.

= Upgrade to Pro for More =

The free version gives you one photo gallery and one masonry gallery to work with. **[Photo Gallery Slideshow & Masonry Tiled Gallery Pro](https://www.i13websolution.com/product/photo-gallery-slideshow-masonry-tiled-gallery/)** unlocks:

* **Unlimited galleries** — create as many slideshow and masonry galleries as you need, each with its own settings
* **Native Elementor widget and Divi module** — add a gallery directly from the Elementor or Divi Builder panel, no shortcode needed
* **Full-featured Gutenberg block** — create or edit a gallery, and add or remove media, without leaving the block editor
* **Mass image upload** and WordPress featured-image integration
* **One-time payment** — no monthly or yearly subscription

**[Live Demo — Masonry Tiled Gallery Pro](http://blog.i13websolution.com/masonry-tiled-gallery-wordpress-plugin)**

**[Live Demo — Photo Gallery Slideshow Pro](http://blog.i13websolution.com/wp-responsive-photo-gallery-pro/)**

**Masonry Tiled Gallery Video**

[youtube https://www.youtube.com/watch?v=kDKwHImBRyQ]

**Photo Gallery Slideshow Video**

[youtube https://www.youtube.com/watch?v=enYB1s1P8C0]

**Please rate this plugin if you find it useful**

**=Masonry Tiled Gallery Features=**

1. Add any number of media (image, video, link) to the masonry tiled gallery grid.
2. Masonry Tiled Gallery and its lightbox are both fully responsive.
3. Edit masonry tiled gallery media directly from the admin.
4. Preview your Masonry Tiled Gallery before adding it to a page.
5. Add it via shortcode, or the Gutenberg block — no coding needed.
6. Show/hide hover icons and captions with a single setting.
7. Open images and video (YouTube, Vimeo, Metacafe, DailyMotion) in a responsive lightbox.

**=Masonry Tiled Gallery Pro Features=**

1. Unlimited masonry tiled galleries and lightboxes (multiple named galleries).
2. Supported video types: custom HTML5 video, YouTube, Vimeo, Metacafe, DailyMotion.
3. Pagination for the tiled masonry gallery.
4. Media description shown in the lightbox.
5. Captions on the thumbnails.
6. Show/hide caption is easy.
7. Show/hide hover icons is easy.
8. Media Order field — display media in whatever order you choose.
9. Native Elementor widget and Divi module.
10. Responsive Admin Layout.
11. No advertisements.

**=Photo Gallery Slideshow Features=**

1. Add any number of images to the responsive photo gallery slideshow.
2. Edit images and image names directly from the admin.
3. Preview your responsive photo gallery slideshow before adding it to a page.
4. Add it via shortcode, or the Gutenberg block — no coding needed.
5. Adjust slide image height and width.
6. Adjust slideshow speed easily.
7. Filmstrip thumbnail navigation with left/right arrows.
8. Responsive Admin Layout.
9. WordPress capabilities feature (control who can manage galleries).

**=Photo Gallery Slideshow Pro Version Features=**

1. Unlimited photo galleries (multiple named galleries).
2. Mass image upload using the WordPress Media Uploader.
3. Add a WordPress featured image to a gallery directly from post/page edit.
4. Slideshow easing effects — pick your desired transition.
5. No advertisements.
6. Image description, if set, is used as the image caption.
7. Display photo gallery images in whatever order you choose.
8. Open image links in a new tab or the same tab.
9. Display the gallery with thumbnail captions.
10. Display slideshow images with captions (image plus description).
11. Display the thumbnail filmstrip at the top or bottom.
12. Native Elementor widget and Divi module.
13. Responsive Admin Layout.
14. WordPress capabilities feature.

[Get Support](http://www.i13websolution.com/contacts)


== Installation ==


This plugin is easy to install like other WordPress plugins:

1. Upload the wp-responsive-photo-gallery folder to the wp-content/plugins folder.

2. Activate the plugin from the Dashboard / Plugins screen.

3. Now the plugin is activated — see the Usage section below for how to add a gallery to a page.


### Usage ###

1. After activating the plugin, go to Photo Slideshow & Masonry Gallery in the admin menu to create and manage your galleries.

2. Manage images by the Manage Images/Manage Media menu.

3. Configure the plugin using the Slideshow & Masonry Tiled Gallery settings menu.

4. Add the photo gallery slideshow to a page or post with the shortcode [print_my_responsive_photo_gallery], or search for "Photo Gallery Slideshow" in the Gutenberg block inserter.

5. Add the masonry tiled gallery to a page or post with the shortcode [print_masonry_gallery_plus_lightbox], or search for "Masonry Tiled Gallery" in the Gutenberg block inserter.

6. In a theme template, use echo do_shortcode('[print_my_responsive_photo_gallery]'); (or the masonry shortcode).


== Screenshots ==


1. Masonry Tiled Gallery Settings
2. Masonry Tiled Gallery Manage Media
3. Frontend Preview of Masonry Tiled Gallery
4. Masonry Tiled Gallery Pro Version (Unlimited Galleries)
5. Masonry Tiled Gallery Pro Version Add Media
6. Masonry Tiled Gallery Pro Version Frontend Preview
7. Photo Gallery Slideshow Settings
8. Photo Gallery Slideshow Manage Images
9. Photo Gallery Slideshow Pro Version (Unlimited Galleries)
10. Photo Gallery Slideshow Frontend Preview
11. Photo Gallery Slideshow Pro Manage Images
12. Photo Gallery Slideshow Pro Version Frontend Preview



== License ==


This plugin is free for everyone! Since it's released under the GPL, you can use it free of charge on your personal or commercial blog. But you can make some donations if you realy find it useful.


== Changelog ==

= 1.0.43 =

* Fixed an intermittent "shows one layout, then visibly re-adjusts to a different one" effect in Masonry Tiled Gallery: if the gallery was already near the viewport when the page loaded (the common case), a scroll-detection check meant to catch galleries placed far down a page could start a second, independent wait-for-images cycle alongside the first, and each could reveal the gallery separately at slightly different moments. The two cycles can no longer run at the same time

= 1.0.42 =

* Fixed an intermittent bug where the Masonry Tiled Gallery would occasionally show as a single narrow column of "vertical lines" instead of proper masonry, fixed by refreshing the page: on some page loads, the gallery's own container width was measured before its layout had actually settled, producing a bogus single-column result. The layout now detects an invalid width measurement and retries on the next few frames instead of committing to it

= 1.0.41 =

* Fixed a brief "flash of full-size, unpositioned images" that could appear right as the page loads, before the previous wait-for-images fix even had a chance to run: hiding the gallery depended on JavaScript adding a class, but there's a small window between the page's CSS loading and that JavaScript executing where nothing had told the browser to hide it yet. Hiding is now the default CSS state from the moment the stylesheet loads, with JavaScript only responsible for revealing it once ready

= 1.0.40 =

* Fixed the "images pop in one at a time, visibly reshuffling the whole gallery each time" effect in Masonry Tiled Gallery: the layout was being recomputed and revealed on every single image's load event as they finished loading, one by one. It now waits for every image to finish (load or fail) and reveals the finished, correctly-packed layout once, with a safety timeout so the gallery still appears if an image never loads
* Fixed a related bug found while testing the above: an image that already failed to load (broken URL, etc.) was incorrectly treated as still "pending" forever, since its error event had already fired before the code checked for it

= 1.0.39 =

* Fixed columns sometimes ending with a visible gap at the bottom in Masonry Tiled Gallery: the layout previously relied on the browser's own CSS Grid auto-placement, which fills the first available slot rather than always choosing the visually shortest column, and could leave one column noticeably short when item heights didn't divide evenly. Replaced it with a proper "shortest column first" placement algorithm (the same approach dedicated masonry libraries use), which packs every column contiguously with no internal gaps

= 1.0.38 =

* Robustness fix: the database table setup (dbDelta) was only ever set to run when the plugin is freshly activated, not when its files are simply updated in place — the normal way most people update a plugin, without deactivating first. Now re-checks and re-applies it automatically after every update too, so any future table changes reach existing sites reliably

= 1.0.37 =

* Fixed Masonry Tiled Gallery rendering as a single narrow column even in a full-width page-builder section: a CSS Grid with auto-fill columns has a minimum "natural" size of just one column, and inside flexbox-based page builder containers that minimum can force the whole gallery to stay that narrow no matter how much space is actually available. Added min-width: 0 to remove that artificial floor

= 1.0.36 =

* Fixed Masonry Tiled Gallery items showing collapsed/uniform-sized when the gallery is placed well below the fold (e.g. after other sections on a long page): images with loading="lazy" don't start downloading — and therefore never report a real height — until the browser decides they're near the viewport, which could be well after the gallery's own layout calculation ran. Added an IntersectionObserver that re-runs the layout as the gallery scrolls into view, well before it's fully on-screen, closing the window where items could appear broken

= 1.0.35 =

* Slideshow and Masonry Preview admin pages now also mention the Gutenberg block as an alternative to the shortcode

= 1.0.34 =

* Fixed: navigating the Slideshow (via nav arrows, autoplay, or clicking a thumbnail) could jump the whole page back up to the gallery instead of just scrolling the thumbnail strip. The filmstrip's "keep active thumbnail in view" code was using scrollIntoView(), which scrolls every scrollable ancestor including the page itself — replaced with code that only scrolls the thumbnail strip's own scrollbar

= 1.0.33 =

* Found the actual root cause of the Modern Masonry Gallery spacing bug: when the shortcode's output gets processed by WordPress's wpautop() (this can happen in text widgets and some page builders, which apply it after shortcodes expand, unlike normal post content), it was inserting several stray `<br />` tags inside every single tile. The grid's height-measuring script was counting those as real content, inflating every tile's reserved space and compounding down the page. The plugin already had a cleanup filter for this exact class of problem (originally written for stray `<p>` tags); extended it to also strip these stray `<br />` tags

= 1.0.32 =

* Found the real reason the masonry gap fix didn't appear to take effect after upgrading: the Modern engine's CSS/JS files were being loaded with the same cache-busting version number since they were first introduced, so browsers/caches had no reason to fetch the updated files. All Modern engine assets now use the plugin's own version number automatically, so this can't happen again on future updates
* Verified the actual grid-gap fix (1.0.31) is correct via automated layout testing

= 1.0.31 =

* Fixed the real cause of the growing empty space in Modern Masonry Gallery: the vertical gap between tiles was being counted twice (once via each tile's own margin, once via the grid row-span calculation), so the extra space compounded down every column. Removed the duplicate margin — the previous 1.0.30 release's dense-packing change is still in effect but wasn't the actual fix

= 1.0.30 =

* Fixed: Modern Masonry Gallery could leave a large empty gap at the bottom of the grid (before pagination/whatever follows) when tile heights varied a lot, due to the CSS Grid masonry technique not backfilling shorter columns. Enabled dense packing to close the gap

= 1.0.29 =

* Fixed: horizontal scrollbar under the Slideshow's thumbnail filmstrip is now hidden (scrolling still works)

= 1.0.28 =

* Added real Gutenberg blocks for both "Photo Gallery Slideshow" and "Masonry Tiled Gallery" — no shortcode needed, search for them by name in the block inserter. Both render through the exact same code as their shortcodes (Legacy/Modern engine selection included), so block and shortcode output always match

= 1.0.27 =

* Modern Masonry Gallery now honours the Gallery Background Color setting (was being ignored) and the Show Icon On Hover setting (hover icons were always shown regardless of this setting)

= 1.0.26 =

* Modern Masonry Gallery: the video play icon now only appears on hover instead of always showing
* Modern Masonry Gallery: added a zoom icon on hover for image tiles (previously only video tiles had a hover icon)

= 1.0.25 =

* Added a new Modern engine for the Masonry Tiled Gallery: dependency-free CSS Grid masonry layout plus a new lightbox supporting images (with prev/next navigation), video embeds, and pagination — selectable from Masonry Gallery Settings. Existing sites are automatically kept on the original Legacy engine, new installs default to Modern
* "Link" media items continue to open their target URL directly without a lightbox, matching Legacy behaviour
* Masonry Gallery admin Preview page now renders through the same function used on the front end, instead of a separate duplicated copy of the grid code

= 1.0.24 =

* Modern slider engine: main panel and filmstrip thumbnails now render as one connected unit (shared dark background and border wrapping both), matching the Legacy engine's look, instead of appearing as two separate boxes

= 1.0.23 =

* Fixed filmstrip thumbnails looking double-cropped when the main Scale setting was set to Crop: thumbnails now use the original uploaded image (cropped once, to the thumbnail's own aspect ratio) instead of reusing the panel-cropped image. Fixed on both the Legacy and Modern engines

= 1.0.22 =

* Added a real "Show Captions" setting to Slideshow Settings (was previously hardcoded off with no UI control)
* Captions (using each image's Title field) now display on both the Legacy and Modern slider engines

= 1.0.21 =

* Modern slider engine now shows a consistent frame border around the panel in both Crop and Fit scale modes
* Modern slider engine now honours the remaining Slideshow settings: Info Bar (position counter, with its opacity setting), and the filmstrip's Frame Opacity, Frame Scale (crop/fit), and Frame Gap settings, which were previously ignored

= 1.0.20 =

* Modern slider engine now matches the Legacy engine's dark background (#222) and active-thumbnail indicator instead of using new accent colors

= 1.0.19 =

* Added a new Modern slider engine for the Photo Gallery Slideshow (dependency-free, no jQuery plugin dependency), selectable from Settings; existing sites are automatically kept on the original Legacy engine, new installs default to Modern
* Photo Gallery Slideshow admin Preview page now renders through the same function used on the front end, instead of a separate duplicated copy of the slider code

= 1.0.18 =

* Added a menu icon for the plugin's admin menu
* Removed old affiliate/donate banners (PayPal donate, ElegantThemes, Google Workspace) and standalone upgrade links, replaced with a single Pro features card

= 1.0.17 =

* Added support for webp images
* Tested with WordPress 6.8


= 1.0.16 =

* Fixed SSRF issue


= 1.0.15 =

* Make plugin compatible with block editor
* Tested with WordPress 6.3


= 1.0.14 =

* Fixed vulnerability
* Tested with WordPress 6.2


= 1.0.13 =

* Fixed error for masonry gallery settings not showing
* Added mass images add feature.
* Tested with WordPress 5.9


= 1.0.12 =
* Fixed error reprting issue
* Tested with WordPress 5.8



= 1.0.11 =

* Fixed lightbox not working with latest updates wordPress
* Fixed gallery not working with latest updates of wordPress
* Tested with WordPress 5.6

= 1.0.10 =

* Fixed photo gallary in lazy loading
* Tested with WordPress 5.5


= 1.0.9 =

* Remove jQuery.noConflict() as it cause $ direct usage problem


= 1.0.8 =

* Improve gallery loading
* Fix caption css

= 1.0.7 =

* Fixed dailymotion get video problem when query string in url.
* Tested with WordPress 5.3
* Fixed click not working for dailymotion video in lightbox


= 1.0.6 =

* Improve call after document ready.

 

= 1.0.5 =

* Fixed flickering masonry tiled gallery in smartphone issue reported by Kim.
* Improve code so that plugin can works when theme jquery included in footer.
* Tested with WordPress 5.2
 

= 1.0.4 =

* Added wordpress capebilities feature. So that admin can set permissions

* Tested upto wordpress 5.1


= 1.0.3 =

* Made plugin translatable

* Added new feature called "Masonry Tiled Gallery"


= 1.0.2 =

* Fixed shortcode not working in Wordpress 4.8

* Tested upto wordpress 4.8

= 1.0.1 =

* I notice that some host wan't allow url in copy function php so now it is fixed.

* Tested upto wordpress 4.6

= 1.0 =

* Stable 1.0 first release


== Upgrade notice ==

= 1.0.8 =

* Please clear browser as well as WordPress cache (If you have installed chache plugin).


= 1.0.7 =

* Please clear browser as well as WordPress cache (If you have installed chache plugin).

= 1.0.6 =

* Please clear WordPress cache (If you have installed chache plugin)


= 1.0.5 =

* Please clear WordPress cache (If you have installed chache plugin)


= 1.0.1 =

* Pro version please do not Upgrade here insted contact @ https://www.i13websolution.com/contacts


= 1.0 =

* Stable 1.0 first release




== Frequently asked questions ==

= How do I add a gallery to a page? =

Use the shortcode, or search for "Photo Gallery Slideshow" or "Masonry Tiled Gallery" in the Gutenberg block inserter. See the Installation and Usage notes above for details.

= Does this support video? =

Yes. The Masonry Tiled Gallery supports YouTube, Vimeo, Metacafe, and DailyMotion video, with the video thumbnail, title, and description fetched automatically. Videos open in a responsive lightbox alongside your images.

= Is this a photo gallery plugin, a slideshow plugin, or a masonry gallery plugin? =

All three, in one plugin. Photo Gallery Slideshow gives you a responsive image slideshow with a thumbnail filmstrip; Masonry Tiled Gallery gives you a responsive masonry (tiled) image and video grid with a lightbox.

= What's the difference between the free and Pro version? =

The free version includes one photo gallery and one masonry gallery. The [Pro version](https://www.i13websolution.com/product/photo-gallery-slideshow-masonry-tiled-gallery/) adds unlimited galleries, a native Elementor widget, a native Divi module, a full-featured Gutenberg block (create/edit a gallery and its media without leaving the block editor), mass image upload, and more — as a one-time payment, not a subscription.

= Does this work with Elementor or Divi? =

The Pro version includes a native Elementor widget and a native Divi module. The free version can be added via shortcode or the Gutenberg block on any page builder.

= Is the gallery responsive/mobile-friendly? =

Yes, both the Photo Gallery Slideshow and the Masonry Tiled Gallery (and their lightboxes) are fully responsive on desktop, tablet, and mobile.
