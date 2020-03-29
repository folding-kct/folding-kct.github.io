---
layout: default
title: Install Guide
nav_order: 3
has_children: true
has_toc: false
permalink: /getting-started
---
<script src="{{base.url}}/assets/passkey_put.js"></script>
<link rel="stylesheet" href="{{base.url}}/assets/css/passkey_put.css">

# Getting Started
{: .no_toc }
Before you install, make sure you have these things ready to go
{: .fs-6 .fw-300 }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}
---

## Step 1: Download Folding@home
First, download the Folding@home software for your computer by clicking one of the buttons below:  

[Windows]({{ site.windows_download }}){: .btn .btn-blue .fs-5 .mb-4 .mb-md-0 .mr-2 }[macOS]({{ site.macos_download }}){: .btn .btn-blue .fs-5 .mb-4 .mb-md-0 .mr-2 }

**Note:** For linux systems, skip this step; the download will be done during installation.
{: .fs-2 }


## Step 2: Get a Passkey
A passkey uniquely identifies you as a donor and is associated with results that you have contributed and is displayed on the [leaderboard](/stats)

While it is not mandatory, we recommend that you get a passkey so that you are uniquely identified on the KCT Team.  

Make a note of your passkey, you will need this later during the setup process.

---

<div id="passkey_put_form" class="form-wrapper">
	<div class="input-text">
		<label for="name_field">Your name</label>
		<input type="text" id="passkey_name" />
	</div>
	<div class="input-text">
		<label for="email_field">E-mail address</label>
		<input type="text" id="passkey_email" />
	</div>
	<div class="input-button">
		<button class="btn btn-blue fs-5 mb-4 mb-md-0 mr-2" onclick="passkey_put()">Get Passkey</button>
		<a href="https://apps.foldingathome.org/getpasskey" target="_blank">
			<button type="button" name="button" class="btn">Backup Link - Get Passkey</button>
		</a>
	</div>
</div>
<div class="success" style="display:none;">
	<h5>Passkey sent. Please check your email.</h5>
	<h6>It may take upto 10 minutes to receive the email.<br>If you do not receive a passkey, check your spam/junk mail before requesting for a new one.</h6>
</div>

---

## Step 3: Team number
The team number is the unique identifier that connects your contributions to the KCT Team.  
You must enter this during the setup process.

The KCT Folding@home team number is **252736**  
It is also listed throughout the website for quick reference.

## Step 4: Installation and Setup Guide
From the sidebar on the left, choose the correct install guide for your operating system and follow the instructions to complete the installation and setup process  

[Windows](/getting-started/windows){: .btn .btn-green .fs-5 .mb-4 .mb-md-0 .mr-2 }[macOS](/getting-started/macos){: .btn .btn-green .fs-5 .mb-4 .mb-md-0 .mr-2 }[Linux](/getting-started/linux){: .btn .btn-green .fs-5 .mb-4 .mb-md-0 .mr-2 }
