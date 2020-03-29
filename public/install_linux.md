---
layout: default
title: Linux
parent: Install Guide
nav_order: 3
permalink: /getting-started/linux
---

# Installation and Setup on Linux (Ubuntu/Debian)
{: .no_toc .d-inline }

Needs improvement
{: .no_toc .label .label-yellow	}

We currently support only 64-bit Ubuntu and other Debian based distributions of Linux.  
{: .fs-4 .fw-300 }
Before you follow the steps in this guide, make sure you have completed the steps from the [Getting Started Guide](/getting-started)
{: .fs-6 .fw-300 }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}
---
Run each of the following commands in your terminal. `Ctrl + Alt + T`

## Download the installer
```
wget {{ site.debian_ubuntu_amd64_download }}
```

## Run the installer
```
sudo dpkg -i {{ site.debian_ubuntu_filename }}
```

## Basic Setup
Once you run the installer, you should see something like this from your package manager:
![Debconf_Terminal](/assets/Username.png)

- Pick a username and hit `Enter`
- Enter the Folding@KCT Team number **252736** and hit `Enter`
- Enter the passkey you created from the [getting started guide](/getting-started) and hit `Enter`

## Configuration
You should now see options for the amount of power you would like to allocate for Folding@home.
- Choose _Full_ and hit `Enter`

You will now be asked whether _FAHClient_ should be started automatically.
- Choose _yes_ and hit `Enter`

That's it! You have installed and configured Folding@home on your Debian-based linux computer.

## Control
The control manager for Folding@home should automatically open in your web browser shortly after installation.
If it does not open, please visit: [http://client.foldingathome.org/](http://client.foldingathome.org/) in your web-browser to open it manually.

Once you open it, you should see something like this:
![FAHClient StartPage]({{ site.web_control_screenshot }})

## Step 7: Setup and Configuration
Once the control manager is open; you can change the information that was set up during installation:
1. Choose 'Set up an Identity' and click 'Start Folding'
2. In the 'Change Identity' window, enter your name, the KCT Team number (**252736**) and the passkey you created in the [Getting Started Guide](/getting-started)
3. Click 'Save' to continue
You should now see the "Web Control" page. Using the options here, you can choose when you want your computer to contribute to Folding@home and how much resources you want to use.  

**To ensure you’re helping with COVID-19 research, select “Any disease” is selected under the “I support research fighting” box. This is the default option. With it enabled, Folding@home will prioritize work related to the novel coronavirus.**

### Recommended Settings
The following settings are recommended:

| Scenario                                                           | Power  | When              |
|:-------------------------------------------------------------------|:-------|:------------------|
| You keep your computer on all the time but you're a light user     | Full   | Only when idle    |
| You keep your computer on all the time with lot of heavy use       | Medium | Only when idle    |
| You turn your computer off after each use but you are a light user | Full   | While I'm working |
| You turn your computer off after each use with lot of heavy use    | Medium | While I'm working |

**We encourage contributors to try and keep their computers on and connected to the internet for as long as possible for maximum benefit.**

You can check your ranking on the [leaderboard](/stats)
