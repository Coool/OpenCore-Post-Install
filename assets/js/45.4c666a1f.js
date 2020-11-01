(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{527:function(t,e,a){"use strict";a.r(e);var s=a(25),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"apple-secure-boot"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apple-secure-boot"}},[t._v("#")]),t._v(" Apple Secure Boot")]),t._v(" "),a("ul",[a("li",[t._v("Note: DmgLoading, SecureBootModel and ApECID require "),a("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("OpenCore 0.6.1"),a("OutboundLink")],1),t._v(" or newer")]),t._v(" "),a("li",[t._v("Note 2: macOS Big Sur requires OpenCore 0.6.3+ for proper Apple Secure Boot support")])]),t._v(" "),a("h2",{attrs:{id:"dmgloading"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dmgloading"}},[t._v("#")]),t._v(" DmgLoading")]),t._v(" "),a("p",[t._v("Quite a simple setting however important in regards to Apple Secure Boot. This setting allows you to set load policy with DMGs in OpenCore. By default we recommend using "),a("code",[t._v("Signed")]),t._v(" however for best security  "),a("code",[t._v("Disabled")]),t._v(" may be preferred.")]),t._v(" "),a("p",[t._v("Possible options for "),a("code",[t._v("Misc -> Security -> DmgLoading")]),t._v(":")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Value")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Comment")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Any")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Allows all DMGs to load in OpenCore, however this option will cause a boot failure Apple Secure Boot is enabled")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Signed")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Allows only Apple-signed DMGs like macOS installers to load")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Disabled")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Disables all external DMG loading, however internal recovery is still allowed with this option")])])])]),t._v(" "),a("h2",{attrs:{id:"securebootmodel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#securebootmodel"}},[t._v("#")]),t._v(" SecureBootModel")]),t._v(" "),a("p",[t._v("SecureBootModel is used set the Apple Secure Boot hardware model and policy, allowing us to enable Apple's Secure Boot with any SMBIOS even if the original SMBIOS did not support it(ie. no T2 present on pre-2017 SMBIOS). Enabling SecureBootModel is the equivalent of "),a("a",{attrs:{href:"https://support.apple.com/HT208330",target:"_blank",rel:"noopener noreferrer"}},[t._v('"Medium Security"'),a("OutboundLink")],1),t._v(", for Full Security please see "),a("a",{attrs:{href:"#apecid"}},[t._v("ApECID")])]),t._v(" "),a("p",[t._v("Currently the following options for "),a("code",[t._v("Misc -> Security -> SecureBootModel")]),t._v(" are supported:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Value")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("SMBIOS")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Minimum macOS Version")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Disabled")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("No model, Secure Boot will be disabled.")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("N/A")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Default")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Currently set to j137, iMacPro1,1")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("10.13.2 (17C2111)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("j137")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("iMacPro1,1 (December 2017)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("10.13.2 (17C2111)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("j680")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("MacBookPro15,1 (July 2018)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("10.13.6 (17G2112)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("j132")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("MacBookPro15,2 (July 2018)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("10.13.6 (17G2112)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("j174")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Macmini8,1 (October 2018)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("10.14 (18A2063)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("j140k")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("MacBookAir8,1 (October 2018)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("10.14.1 (18B2084)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("j780")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("MacBookPro15,3 (May 2019)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("10.14.5 (18F132)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("j213")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("MacBookPro15,4 (July 2019)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("10.14.5 (18F2058)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("j140a")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("MacBookAir8,2 (July 2019)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("10.14.5 (18F2058)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("j152f")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("MacBookPro16,1 (November 2019)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("10.15.1 (19B2093)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("j160")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("MacPro7,1 (December 2019)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("10.15.1 (19B88)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("j230k")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("MacBookAir9,1 (March 2020)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("10.15.3 (19D2064)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("j214k")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("MacBookPro16,2 (May 2020)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("10.15.4 (19E2269)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("j223")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("MacBookPro16,3 (May 2020)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("10.15.4 (19E2265)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("j215")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("MacBookPro16,4 (June 2020)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("10.15.5 (19F96)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("j185")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("iMac20,1 (August 2020)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("10.15.6 (19G2005)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("j185f")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("iMac20,2 (August 2020)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("10.15.6 (19G2005)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("x86legacy")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Non-T2 Macs in Big Sur")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("11.0.0")])])])]),t._v(" "),a("h3",{attrs:{id:"special-notes-with-securebootmodel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#special-notes-with-securebootmodel"}},[t._v("#")]),t._v(" Special Notes with SecureBootModel")]),t._v(" "),a("ul",[a("li",[t._v("Generally "),a("code",[t._v("Default")]),t._v(" is more than adequate to use however if you plan to have use this with ApECID for full security, we recommend setting a proper value(ie. closest to your SMBIOS or versions of macOS you plan to boot) since the "),a("code",[t._v("Default")]),t._v(" value is likely to be updated in the future.")]),t._v(" "),a("li",[t._v("The list of cached drivers may be different, resulting in the need to change the list of Added or Forced kernel drivers.\n"),a("ul",[a("li",[t._v("ie. IO80211Family cannot be injected in this case.")])])]),t._v(" "),a("li",[t._v("Unsigned and several signed kernel drivers cannot be used\n"),a("ul",[a("li",[t._v("This includes Nvidia's Web Drivers in 10.13")])])]),t._v(" "),a("li",[t._v("System volume alterations on operating systems with sealing, like macOS 11, may result in the operating system being unbootable.\n"),a("ul",[a("li",[t._v("If you plan to disable macOS's APFS snapshots, please remember to disable SecureBootModel as well")])])]),t._v(" "),a("li",[t._v("Certain boot errors are more likely to be triggered with Secure Boot enabled that were previously not required\n"),a("ul",[a("li",[t._v("Commonly seen with certain APTIO IV systems where they may not require IgnoreInvalidFlexRatio and HashServices initially however Secure Boot does.")])])]),t._v(" "),a("li",[t._v("On older CPUs (ie. before Sandy Bridge) enabling Apple Secure Boot might cause slightly slower loading by up to 1 second")]),t._v(" "),a("li",[t._v("Operating systems released before Apple Secure Boot landed (ie. macOS 10.12 or earlier) will still boot until UEFI Secure Boot is enabled. This is so,\n"),a("ul",[a("li",[t._v("This is due to Apple Secure Boot assuming they are incompatible and will be handled by the firmware just like Microsoft Windows is")])])])]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("Troubleshooting")]),t._v(" "),a("p",[t._v("Due to an annoying bug on Apple's end, certain systems may be missing the secure boot files themselves on the drive. Because of this, you may get issues such as:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("OCB: LoadImage failed - Security Violation\n")])])]),a("p",[t._v("To resolve, run the following in macOS:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# First, find your Preboot volume")]),t._v("\ndiskutil list\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# From the below list, we can see our Preboot volume is disk5s2")]),t._v("\n/dev/disk5 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("synthesized"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#:                       TYPE NAME                    SIZE       IDENTIFIER")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(":      APFS Container Scheme -                      +255.7 GB   disk5\n                                 Physical Store disk4s2\n   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(":                APFS Volume ⁨Big Sur HD - Data⁩       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("122.5")]),t._v(" GB   disk5s1\n   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(":                APFS Volume ⁨Preboot⁩                 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("309.4")]),t._v(" MB   disk5s2\n   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(":                APFS Volume ⁨Recovery⁩                "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("887.8")]),t._v(" MB   disk5s3\n   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(":                APFS Volume ⁨VM⁩                      "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v(" MB     disk5s4\n   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(":                APFS Volume ⁨Big Sur HD⁩              "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16.2")]),t._v(" GB    disk5s5\n   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(":              APFS Snapshot ⁨com.apple.os.update-"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".⁩ "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16.2")]),t._v(" GB    disk5s5s\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Now mount the Preboot volume")]),t._v("\ndiskutil "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),t._v(" disk5s2\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# CD into your Preboot volume")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Note the actual volume is under /System/Volumes/Preboot in macOS")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# however in Recovery it's simply under /Volumes/Preboot")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /System/Volumes/Preboot\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Grab your UUID")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" \n\t46923F6E-968E-46E9-AC6D-9E6141DF52FD \n\tCD844C38-1A25-48D5-9388-5D62AA46CFB8\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# If multiple show up(ie. you dual boot multiple versions of macOS), you will")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# need to determine which UUID is correct.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Easiest way to determine is printing the value of .disk_label.contentDetails")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# of each volume.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" ./46923F6E-968E-46E9-AC6D-9E6141DF52FD/System/Library/CoreServices/.disk_label.contentDetails\n\tBig Sur HD%\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" ./CD844C38-1A25-48D5-9388-5D62AA46CFB8/System/Library/CoreServices/.disk_label.contentDetails\n\tCatalina HD%\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Next lets copy over the secure boot files, recovery will need different commands")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Example commands for inside macOS")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Replace CD844C38-1A25-48D5-9388-5D62AA46CFB8 with your UUID value")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" -a /usr/standalone/i386/. /System/Volumes/Preboot/CD844C38-1A25-48D5-9388-5D62AA46CFB8/System/Library/CoreServices\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Example commands for Recovery")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Replace Macintosh\\ HD and CD844C38-1A25-48D5-9388-5D62AA46CFB8 with")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# your System Volume's name and Preboot's UUID")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" -a /Volumes/Macintosh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" HD/usr/standalone/i386/. /Volumes/Preboot/CD844C38-1A25-48D5-9388-5D62AA46CFB8/System/Library/CoreServices\n")])])]),a("p",[t._v("Now you can enable SecureBootModel and reboot without issue! And since we're not editing the system volume itself we don't need to worry about disabling SIP or breaking macOS snapshots.")])]),t._v(" "),a("h2",{attrs:{id:"apecid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apecid"}},[t._v("#")]),t._v(" ApECID")]),t._v(" "),a("p",[t._v("ApECID is used as an Apple Enclave Identifier, what this means is it allows us to use  personalized Apple Secure Boot identifiers and achieve "),a("a",{attrs:{href:"https://support.apple.com/HT208330",target:"_blank",rel:"noopener noreferrer"}},[t._v('"Full Security"'),a("OutboundLink")],1),t._v(" as per Apple's secure boot page(when paired with SecureBootModel).")]),t._v(" "),a("p",[t._v("To generate your own ApECID value, you'll want some form of cryptographically secure random number generator that will output a 64-bit integer. Below we provide an example that can be run if "),a("a",{attrs:{href:"https://www.python.org/downloads/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Python 3"),a("OutboundLink")],1),t._v(" is installed on your machine:")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[t._v("python3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("c "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'import secrets; print(secrets.randbits(64))'")]),t._v("\n")])])]),a("p",[t._v("With this unique 64-bit int, you can now enter it under Misc -> ApECID in your config.plist")]),t._v(" "),a("p",[t._v("However before setting ApECID, there's a few things we need to note:")]),t._v(" "),a("ul",[a("li",[t._v("Fresh installs with ApECID set to a non-zero value will require a network connection at install time for verification")]),t._v(" "),a("li",[t._v("SecureBootModel should have a defined value instead of "),a("code",[t._v("Default")]),t._v(" to avoid issues if the value were to change in later OpenCore versions.")]),t._v(" "),a("li",[t._v("Pre-existing installs will need to use bless, for this you'll need to first reboot into recovery and run the following command(Replace Macintosh HD with your system's volume name):")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v(" bless bless --folder "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/Volumes/Macintosh HD/System/Library/CoreServices"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --bootefi --personalize\n")])])]),a("p",[t._v('And something to note when reinstalling the OS is that you may receive "Unable to verify macOS" error message. To work around his issue, you\'ll want to allocate a dedicated RAM disk of 2 MBs for macOS personalization by entering the following commands in the macOS recovery terminal before starting the installation:')]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("disk")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("hdiutil attach -nomount ram://4096"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(" \ndiskutil erasevolume HFS+ SecureBoot "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$disk")]),t._v(" \ndiskutil unmount "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$disk")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" /var/tmp/OSPersonalizationTemp \ndiskutil "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),t._v(" -mountpoint /var/tmp/OSPersonalizationTemp "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$disk")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);