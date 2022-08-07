import CustomNextImage from '@components/Home/components/CustomNextImage';
import SectionHeader from '@components/core/SectionHeader';
import React, { Fragment } from 'react';

const linearGradient =
	'linear-gradient(315deg, rgb(0, 153, 255) 0%, rgb(0, 204, 255) 100%)';

const linearGradient2 =
	'linear-gradient(315deg, rgb(7, 222, 255) 0%, rgb(15, 151, 255) 100%)';

const data = [
	[
		{
			image: {
				alt: 'tweet author avatar',
				src: 'https://framerusercontent.com/images/2CCcNAwa4m4zthds4Ug5tvlCmEg.jpeg',
			},
			name: 'Bryce Bjork',
			username: '@brycedbjork',
			content: '@framer wow. I am blown away',
		},
		{
			image: {
				alt: 'tweet author avatar',
				src: 'https://framerusercontent.com/images/SzP2F0lJtPb2Arqqy3XJTCqdAxw.jpeg',
			},
			name: 'olaia irigoyen',
			username: '@oliialioli',
			content:
				'Loved to play with @framer sites! At @GetCapchase we have entirely designed and built http://capchase.design incredibly fast. Impressive tool 🔥',
		},
		{
			image: {
				alt: 'tweet author avatar',
				src: 'https://framerusercontent.com/images/svcA37qjGKK5R4HeCIy3wyGlzU.jpeg',
			},
			name: '🛸 Silvia Bormüller ',
			username: '@svorklab',
			content:
				"I'm really impressed by the new @framer It's super easy to create a really nice looking responsive website.There are many well designed elements you can already re useUsually, I've been copy pasting elements in Webflow & everything looked like 🚮",
		},
		{
			image: {
				alt: 'tweet author avatar',
				src: 'https://framerusercontent.com/images/SWbSJdeqf86O81DBbzomThXOKc.jpeg',
			},
			name: 'David Notté',
			username: '@Daafdaan',
			content:
				"🚀 With a bit of delay: a new and improvedhttp://daafdaan.comThis is the 3rd website I've launched with @Framer Sites and I am super impressed. Can't wait to do more.In the meantime, have a look, and if you wanna collaborate, send me a message! ✌️",
		},
		{
			image: {
				alt: 'tweet author avatar',
				src: 'https://framerusercontent.com/images/HKmvDFXKOdtKZNVwhcsLFHsvjYA.jpeg',
			},
			name: 'Yisel Cerro ⚡️',
			username: '@orrecled',
			content:
				"The new feature from @framer\nIt's just amazing!Recorded with the help of @TellaHQ",
		},
		{
			image: {
				alt: 'tweet author avatar',
				src: 'https://framerusercontent.com/images/2CCcNAwa4m4zthds4Ug5tvlCmEg.jpeg',
			},
			name: 'Bryce Bjork',
			username: '@brycedbjork',
			content: '@framer wow. I am blown away',
		},
		{
			image: {
				alt: 'tweet author avatar',
				src: 'https://framerusercontent.com/images/SzP2F0lJtPb2Arqqy3XJTCqdAxw.jpeg',
			},
			name: 'olaia irigoyen',
			username: '@oliialioli',
			content:
				'Loved to play with @framer sites! At @GetCapchase we have entirely designed and built http://capchase.design incredibly fast. Impressive tool 🔥',
		},
		{
			image: {
				alt: 'tweet author avatar',
				src: 'https://framerusercontent.com/images/svcA37qjGKK5R4HeCIy3wyGlzU.jpeg',
			},
			name: '🛸 Silvia Bormüller ',
			username: '@svorklab',
			content:
				"I'm really impressed by the new @framer It's super easy to create a really nice looking responsive website.There are many well designed elements you can already re useUsually, I've been copy pasting elements in Webflow & everything looked like 🚮",
		},
		{
			image: {
				alt: 'tweet author avatar',
				src: 'https://framerusercontent.com/images/SWbSJdeqf86O81DBbzomThXOKc.jpeg',
			},
			name: 'David Notté',
			username: '@Daafdaan',
			content:
				"🚀 With a bit of delay: a new and improvedhttp://daafdaan.comThis is the 3rd website I've launched with @Framer Sites and I am super impressed. Can't wait to do more.In the meantime, have a look, and if you wanna collaborate, send me a message! ✌️",
		},
		{
			image: {
				alt: 'tweet author avatar',
				src: 'https://framerusercontent.com/images/HKmvDFXKOdtKZNVwhcsLFHsvjYA.jpeg',
			},
			name: 'Yisel Cerro ⚡️',
			username: '@orrecled',
			content:
				"The new feature from @framer\nIt's just amazing!Recorded with the help of @TellaHQ",
		},
		{
			image: {
				alt: 'tweet author avatar',
				src: 'https://framerusercontent.com/images/2CCcNAwa4m4zthds4Ug5tvlCmEg.jpeg',
			},
			name: 'Bryce Bjork',
			username: '@brycedbjork',
			content: '@framer wow. I am blown away',
		},
		{
			image: {
				alt: 'tweet author avatar',
				src: 'https://framerusercontent.com/images/SzP2F0lJtPb2Arqqy3XJTCqdAxw.jpeg',
			},
			name: 'olaia irigoyen',
			username: '@oliialioli',
			content:
				'Loved to play with @framer sites! At @GetCapchase we have entirely designed and built http://capchase.design incredibly fast. Impressive tool 🔥',
		},
		{
			image: {
				alt: 'tweet author avatar',
				src: 'https://framerusercontent.com/images/svcA37qjGKK5R4HeCIy3wyGlzU.jpeg',
			},
			name: '🛸 Silvia Bormüller ',
			username: '@svorklab',
			content:
				"I'm really impressed by the new @framer It's super easy to create a really nice looking responsive website.There are many well designed elements you can already re useUsually, I've been copy pasting elements in Webflow & everything looked like 🚮",
		},
		{
			image: {
				alt: 'tweet author avatar',
				src: 'https://framerusercontent.com/images/SWbSJdeqf86O81DBbzomThXOKc.jpeg',
			},
			name: 'David Notté',
			username: '@Daafdaan',
			content:
				"🚀 With a bit of delay: a new and improvedhttp://daafdaan.comThis is the 3rd website I've launched with @Framer Sites and I am super impressed. Can't wait to do more.In the meantime, have a look, and if you wanna collaborate, send me a message! ✌️",
		},
		{
			image: {
				alt: 'tweet author avatar',
				src: 'https://framerusercontent.com/images/HKmvDFXKOdtKZNVwhcsLFHsvjYA.jpeg',
			},
			name: 'Yisel Cerro ⚡️',
			username: '@orrecled',
			content:
				"The new feature from @framer\nIt's just amazing!Recorded with the help of @TellaHQ",
		},
	],
	[
		{
			image: {
				alt: 'tweet author avatar',
				src: 'https://framerusercontent.com/images/2CCcNAwa4m4zthds4Ug5tvlCmEg.jpeg',
			},
			name: 'Bryce Bjork',
			username: '@brycedbjork',
			content: '@framer wow. I am blown away',
		},
		{
			image: {
				alt: 'tweet author avatar',
				src: 'https://framerusercontent.com/images/SzP2F0lJtPb2Arqqy3XJTCqdAxw.jpeg',
			},
			name: 'olaia irigoyen',
			username: '@oliialioli',
			content:
				'Loved to play with @framer sites! At @GetCapchase we have entirely designed and built http://capchase.design incredibly fast. Impressive tool 🔥',
		},
		{
			image: {
				alt: 'tweet author avatar',
				src: 'https://framerusercontent.com/images/svcA37qjGKK5R4HeCIy3wyGlzU.jpeg',
			},
			name: '🛸 Silvia Bormüller ',
			username: '@svorklab',
			content:
				"I'm really impressed by the new @framer It's super easy to create a really nice looking responsive website.There are many well designed elements you can already re useUsually, I've been copy pasting elements in Webflow & everything looked like 🚮",
		},
		{
			image: {
				alt: 'tweet author avatar',
				src: 'https://framerusercontent.com/images/SWbSJdeqf86O81DBbzomThXOKc.jpeg',
			},
			name: 'David Notté',
			username: '@Daafdaan',
			content:
				"🚀 With a bit of delay: a new and improvedhttp://daafdaan.comThis is the 3rd website I've launched with @Framer Sites and I am super impressed. Can't wait to do more.In the meantime, have a look, and if you wanna collaborate, send me a message! ✌️",
		},
		{
			image: {
				alt: 'tweet author avatar',
				src: 'https://framerusercontent.com/images/HKmvDFXKOdtKZNVwhcsLFHsvjYA.jpeg',
			},
			name: 'Yisel Cerro ⚡️',
			username: '@orrecled',
			content:
				"The new feature from @framer\nIt's just amazing!Recorded with the help of @TellaHQ",
		},
		{
			image: {
				alt: 'tweet author avatar',
				src: 'https://framerusercontent.com/images/2CCcNAwa4m4zthds4Ug5tvlCmEg.jpeg',
			},
			name: 'Bryce Bjork',
			username: '@brycedbjork',
			content: '@framer wow. I am blown away',
		},
		{
			image: {
				alt: 'tweet author avatar',
				src: 'https://framerusercontent.com/images/SzP2F0lJtPb2Arqqy3XJTCqdAxw.jpeg',
			},
			name: 'olaia irigoyen',
			username: '@oliialioli',
			content:
				'Loved to play with @framer sites! At @GetCapchase we have entirely designed and built http://capchase.design incredibly fast. Impressive tool 🔥',
		},
		{
			image: {
				alt: 'tweet author avatar',
				src: 'https://framerusercontent.com/images/svcA37qjGKK5R4HeCIy3wyGlzU.jpeg',
			},
			name: '🛸 Silvia Bormüller ',
			username: '@svorklab',
			content:
				"I'm really impressed by the new @framer It's super easy to create a really nice looking responsive website.There are many well designed elements you can already re useUsually, I've been copy pasting elements in Webflow & everything looked like 🚮",
		},
		{
			image: {
				alt: 'tweet author avatar',
				src: 'https://framerusercontent.com/images/SWbSJdeqf86O81DBbzomThXOKc.jpeg',
			},
			name: 'David Notté',
			username: '@Daafdaan',
			content:
				"🚀 With a bit of delay: a new and improvedhttp://daafdaan.comThis is the 3rd website I've launched with @Framer Sites and I am super impressed. Can't wait to do more.In the meantime, have a look, and if you wanna collaborate, send me a message! ✌️",
		},
		{
			image: {
				alt: 'tweet author avatar',
				src: 'https://framerusercontent.com/images/HKmvDFXKOdtKZNVwhcsLFHsvjYA.jpeg',
			},
			name: 'Yisel Cerro ⚡️',
			username: '@orrecled',
			content:
				"The new feature from @framer\nIt's just amazing!Recorded with the help of @TellaHQ",
		},
		{
			image: {
				alt: 'tweet author avatar',
				src: 'https://framerusercontent.com/images/2CCcNAwa4m4zthds4Ug5tvlCmEg.jpeg',
			},
			name: 'Bryce Bjork',
			username: '@brycedbjork',
			content: '@framer wow. I am blown away',
		},
		{
			image: {
				alt: 'tweet author avatar',
				src: 'https://framerusercontent.com/images/SzP2F0lJtPb2Arqqy3XJTCqdAxw.jpeg',
			},
			name: 'olaia irigoyen',
			username: '@oliialioli',
			content:
				'Loved to play with @framer sites! At @GetCapchase we have entirely designed and built http://capchase.design incredibly fast. Impressive tool 🔥',
		},
		{
			image: {
				alt: 'tweet author avatar',
				src: 'https://framerusercontent.com/images/svcA37qjGKK5R4HeCIy3wyGlzU.jpeg',
			},
			name: '🛸 Silvia Bormüller ',
			username: '@svorklab',
			content:
				"I'm really impressed by the new @framer It's super easy to create a really nice looking responsive website.There are many well designed elements you can already re useUsually, I've been copy pasting elements in Webflow & everything looked like 🚮",
		},
		{
			image: {
				alt: 'tweet author avatar',
				src: 'https://framerusercontent.com/images/SWbSJdeqf86O81DBbzomThXOKc.jpeg',
			},
			name: 'David Notté',
			username: '@Daafdaan',
			content:
				"🚀 With a bit of delay: a new and improvedhttp://daafdaan.comThis is the 3rd website I've launched with @Framer Sites and I am super impressed. Can't wait to do more.In the meantime, have a look, and if you wanna collaborate, send me a message! ✌️",
		},
		{
			image: {
				alt: 'tweet author avatar',
				src: 'https://framerusercontent.com/images/HKmvDFXKOdtKZNVwhcsLFHsvjYA.jpeg',
			},
			name: 'Yisel Cerro ⚡️',
			username: '@orrecled',
			content:
				"The new feature from @framer\nIt's just amazing!Recorded with the help of @TellaHQ",
		},
	],
	[
		{
			image: {
				alt: 'tweet author avatar',
				src: 'https://framerusercontent.com/images/2CCcNAwa4m4zthds4Ug5tvlCmEg.jpeg',
			},
			name: 'Bryce Bjork',
			username: '@brycedbjork',
			content: '@framer wow. I am blown away',
		},
		{
			image: {
				alt: 'tweet author avatar',
				src: 'https://framerusercontent.com/images/SzP2F0lJtPb2Arqqy3XJTCqdAxw.jpeg',
			},
			name: 'olaia irigoyen',
			username: '@oliialioli',
			content:
				'Loved to play with @framer sites! At @GetCapchase we have entirely designed and built http://capchase.design incredibly fast. Impressive tool 🔥',
		},
		{
			image: {
				alt: 'tweet author avatar',
				src: 'https://framerusercontent.com/images/svcA37qjGKK5R4HeCIy3wyGlzU.jpeg',
			},
			name: '🛸 Silvia Bormüller ',
			username: '@svorklab',
			content:
				"I'm really impressed by the new @framer It's super easy to create a really nice looking responsive website.There are many well designed elements you can already re useUsually, I've been copy pasting elements in Webflow & everything looked like 🚮",
		},
		{
			image: {
				alt: 'tweet author avatar',
				src: 'https://framerusercontent.com/images/SWbSJdeqf86O81DBbzomThXOKc.jpeg',
			},
			name: 'David Notté',
			username: '@Daafdaan',
			content:
				"🚀 With a bit of delay: a new and improvedhttp://daafdaan.comThis is the 3rd website I've launched with @Framer Sites and I am super impressed. Can't wait to do more.In the meantime, have a look, and if you wanna collaborate, send me a message! ✌️",
		},
		{
			image: {
				alt: 'tweet author avatar',
				src: 'https://framerusercontent.com/images/HKmvDFXKOdtKZNVwhcsLFHsvjYA.jpeg',
			},
			name: 'Yisel Cerro ⚡️',
			username: '@orrecled',
			content:
				"The new feature from @framer\nIt's just amazing!Recorded with the help of @TellaHQ",
		},
		{
			image: {
				alt: 'tweet author avatar',
				src: 'https://framerusercontent.com/images/2CCcNAwa4m4zthds4Ug5tvlCmEg.jpeg',
			},
			name: 'Bryce Bjork',
			username: '@brycedbjork',
			content: '@framer wow. I am blown away',
		},
		{
			image: {
				alt: 'tweet author avatar',
				src: 'https://framerusercontent.com/images/SzP2F0lJtPb2Arqqy3XJTCqdAxw.jpeg',
			},
			name: 'olaia irigoyen',
			username: '@oliialioli',
			content:
				'Loved to play with @framer sites! At @GetCapchase we have entirely designed and built http://capchase.design incredibly fast. Impressive tool 🔥',
		},
		{
			image: {
				alt: 'tweet author avatar',
				src: 'https://framerusercontent.com/images/svcA37qjGKK5R4HeCIy3wyGlzU.jpeg',
			},
			name: '🛸 Silvia Bormüller ',
			username: '@svorklab',
			content:
				"I'm really impressed by the new @framer It's super easy to create a really nice looking responsive website.There are many well designed elements you can already re useUsually, I've been copy pasting elements in Webflow & everything looked like 🚮",
		},
		{
			image: {
				alt: 'tweet author avatar',
				src: 'https://framerusercontent.com/images/SWbSJdeqf86O81DBbzomThXOKc.jpeg',
			},
			name: 'David Notté',
			username: '@Daafdaan',
			content:
				"🚀 With a bit of delay: a new and improvedhttp://daafdaan.comThis is the 3rd website I've launched with @Framer Sites and I am super impressed. Can't wait to do more.In the meantime, have a look, and if you wanna collaborate, send me a message! ✌️",
		},
		{
			image: {
				alt: 'tweet author avatar',
				src: 'https://framerusercontent.com/images/HKmvDFXKOdtKZNVwhcsLFHsvjYA.jpeg',
			},
			name: 'Yisel Cerro ⚡️',
			username: '@orrecled',
			content:
				"The new feature from @framer\nIt's just amazing!Recorded with the help of @TellaHQ",
		},
		{
			image: {
				alt: 'tweet author avatar',
				src: 'https://framerusercontent.com/images/2CCcNAwa4m4zthds4Ug5tvlCmEg.jpeg',
			},
			name: 'Bryce Bjork',
			username: '@brycedbjork',
			content: '@framer wow. I am blown away',
		},
		{
			image: {
				alt: 'tweet author avatar',
				src: 'https://framerusercontent.com/images/SzP2F0lJtPb2Arqqy3XJTCqdAxw.jpeg',
			},
			name: 'olaia irigoyen',
			username: '@oliialioli',
			content:
				'Loved to play with @framer sites! At @GetCapchase we have entirely designed and built http://capchase.design incredibly fast. Impressive tool 🔥',
		},
		{
			image: {
				alt: 'tweet author avatar',
				src: 'https://framerusercontent.com/images/svcA37qjGKK5R4HeCIy3wyGlzU.jpeg',
			},
			name: '🛸 Silvia Bormüller ',
			username: '@svorklab',
			content:
				"I'm really impressed by the new @framer It's super easy to create a really nice looking responsive website.There are many well designed elements you can already re useUsually, I've been copy pasting elements in Webflow & everything looked like 🚮",
		},
		{
			image: {
				alt: 'tweet author avatar',
				src: 'https://framerusercontent.com/images/SWbSJdeqf86O81DBbzomThXOKc.jpeg',
			},
			name: 'David Notté',
			username: '@Daafdaan',
			content:
				"🚀 With a bit of delay: a new and improvedhttp://daafdaan.comThis is the 3rd website I've launched with @Framer Sites and I am super impressed. Can't wait to do more.In the meantime, have a look, and if you wanna collaborate, send me a message! ✌️",
		},
		{
			image: {
				alt: 'tweet author avatar',
				src: 'https://framerusercontent.com/images/HKmvDFXKOdtKZNVwhcsLFHsvjYA.jpeg',
			},
			name: 'Yisel Cerro ⚡️',
			username: '@orrecled',
			content:
				"The new feature from @framer\nIt's just amazing!Recorded with the help of @TellaHQ",
		},
	],
	[
		{
			image: {
				alt: 'tweet author avatar',
				src: 'https://framerusercontent.com/images/2CCcNAwa4m4zthds4Ug5tvlCmEg.jpeg',
			},
			name: 'Bryce Bjork',
			username: '@brycedbjork',
			content: '@framer wow. I am blown away',
		},
		{
			image: {
				alt: 'tweet author avatar',
				src: 'https://framerusercontent.com/images/SzP2F0lJtPb2Arqqy3XJTCqdAxw.jpeg',
			},
			name: 'olaia irigoyen',
			username: '@oliialioli',
			content:
				'Loved to play with @framer sites! At @GetCapchase we have entirely designed and built http://capchase.design incredibly fast. Impressive tool 🔥',
		},
		{
			image: {
				alt: 'tweet author avatar',
				src: 'https://framerusercontent.com/images/svcA37qjGKK5R4HeCIy3wyGlzU.jpeg',
			},
			name: '🛸 Silvia Bormüller ',
			username: '@svorklab',
			content:
				"I'm really impressed by the new @framer It's super easy to create a really nice looking responsive website.There are many well designed elements you can already re useUsually, I've been copy pasting elements in Webflow & everything looked like 🚮",
		},
		{
			image: {
				alt: 'tweet author avatar',
				src: 'https://framerusercontent.com/images/SWbSJdeqf86O81DBbzomThXOKc.jpeg',
			},
			name: 'David Notté',
			username: '@Daafdaan',
			content:
				"🚀 With a bit of delay: a new and improvedhttp://daafdaan.comThis is the 3rd website I've launched with @Framer Sites and I am super impressed. Can't wait to do more.In the meantime, have a look, and if you wanna collaborate, send me a message! ✌️",
		},
		{
			image: {
				alt: 'tweet author avatar',
				src: 'https://framerusercontent.com/images/HKmvDFXKOdtKZNVwhcsLFHsvjYA.jpeg',
			},
			name: 'Yisel Cerro ⚡️',
			username: '@orrecled',
			content:
				"The new feature from @framer\nIt's just amazing!Recorded with the help of @TellaHQ",
		},
		{
			image: {
				alt: 'tweet author avatar',
				src: 'https://framerusercontent.com/images/2CCcNAwa4m4zthds4Ug5tvlCmEg.jpeg',
			},
			name: 'Bryce Bjork',
			username: '@brycedbjork',
			content: '@framer wow. I am blown away',
		},
		{
			image: {
				alt: 'tweet author avatar',
				src: 'https://framerusercontent.com/images/SzP2F0lJtPb2Arqqy3XJTCqdAxw.jpeg',
			},
			name: 'olaia irigoyen',
			username: '@oliialioli',
			content:
				'Loved to play with @framer sites! At @GetCapchase we have entirely designed and built http://capchase.design incredibly fast. Impressive tool 🔥',
		},
		{
			image: {
				alt: 'tweet author avatar',
				src: 'https://framerusercontent.com/images/svcA37qjGKK5R4HeCIy3wyGlzU.jpeg',
			},
			name: '🛸 Silvia Bormüller ',
			username: '@svorklab',
			content:
				"I'm really impressed by the new @framer It's super easy to create a really nice looking responsive website.There are many well designed elements you can already re useUsually, I've been copy pasting elements in Webflow & everything looked like 🚮",
		},
		{
			image: {
				alt: 'tweet author avatar',
				src: 'https://framerusercontent.com/images/SWbSJdeqf86O81DBbzomThXOKc.jpeg',
			},
			name: 'David Notté',
			username: '@Daafdaan',
			content:
				"🚀 With a bit of delay: a new and improvedhttp://daafdaan.comThis is the 3rd website I've launched with @Framer Sites and I am super impressed. Can't wait to do more.In the meantime, have a look, and if you wanna collaborate, send me a message! ✌️",
		},
		{
			image: {
				alt: 'tweet author avatar',
				src: 'https://framerusercontent.com/images/HKmvDFXKOdtKZNVwhcsLFHsvjYA.jpeg',
			},
			name: 'Yisel Cerro ⚡️',
			username: '@orrecled',
			content:
				"The new feature from @framer\nIt's just amazing!Recorded with the help of @TellaHQ",
		},
		{
			image: {
				alt: 'tweet author avatar',
				src: 'https://framerusercontent.com/images/2CCcNAwa4m4zthds4Ug5tvlCmEg.jpeg',
			},
			name: 'Bryce Bjork',
			username: '@brycedbjork',
			content: '@framer wow. I am blown away',
		},
		{
			image: {
				alt: 'tweet author avatar',
				src: 'https://framerusercontent.com/images/SzP2F0lJtPb2Arqqy3XJTCqdAxw.jpeg',
			},
			name: 'olaia irigoyen',
			username: '@oliialioli',
			content:
				'Loved to play with @framer sites! At @GetCapchase we have entirely designed and built http://capchase.design incredibly fast. Impressive tool 🔥',
		},
		{
			image: {
				alt: 'tweet author avatar',
				src: 'https://framerusercontent.com/images/svcA37qjGKK5R4HeCIy3wyGlzU.jpeg',
			},
			name: '🛸 Silvia Bormüller ',
			username: '@svorklab',
			content:
				"I'm really impressed by the new @framer It's super easy to create a really nice looking responsive website.There are many well designed elements you can already re useUsually, I've been copy pasting elements in Webflow & everything looked like 🚮",
		},
		{
			image: {
				alt: 'tweet author avatar',
				src: 'https://framerusercontent.com/images/SWbSJdeqf86O81DBbzomThXOKc.jpeg',
			},
			name: 'David Notté',
			username: '@Daafdaan',
			content:
				"🚀 With a bit of delay: a new and improvedhttp://daafdaan.comThis is the 3rd website I've launched with @Framer Sites and I am super impressed. Can't wait to do more.In the meantime, have a look, and if you wanna collaborate, send me a message! ✌️",
		},
		{
			image: {
				alt: 'tweet author avatar',
				src: 'https://framerusercontent.com/images/HKmvDFXKOdtKZNVwhcsLFHsvjYA.jpeg',
			},
			name: 'Yisel Cerro ⚡️',
			username: '@orrecled',
			content:
				"The new feature from @framer\nIt's just amazing!Recorded with the help of @TellaHQ",
		},
	],
];

const ItIsLikeMagicSection = () => {
	return (
		<section>
			<SectionHeader
				h2={{
					text: '"It\'s like magic."',
					linearGradient,
				}}
				p={{
					text: 'Our customers love how easy it is to design and publish a professional site in Framer.',
				}}
				button={{
					href: '#',
					linearGradient: linearGradient2,
					text: 'Read more tweets',
				}}
			/>
			<div
				className='flex max-w-[1200px] mx-auto max-h-[800px] overflow-hidden shadow-gray-200 rounded-3xl'
				style={{
					boxShadow: 'inset  0 0 3rem #e5e7eb',
				}}
			>
				{data.map((item, index) => (
					<div key={index} className='mx-4'>
						<ul className='flex flex-col'>
							{item.map((subItem, subItemIndex) => (
								<li
									key={subItemIndex}
									className='mb-4 p-4 w-64 shadow-lg rounded-xl'
								>
									<header className='flex mb-2'>
										<div className=''>
											<CustomNextImage
												src={subItem.image.src}
												alt={subItem.image.alt}
												width={80}
												height={80}
												className='rounded-full'
											/>
										</div>
										<span className='px-1' />
										<div className='font-medium'>
											<p className='text-xl'>{subItem.name}</p>
											<p className='text-gray-400 text-lg'>
												{subItem.username}
											</p>
										</div>
									</header>
									<div className=''>
										<p className='text-lg font-medium'>
											{subItem.content.split(' ').map((word, wordIndex) =>
												word.startsWith('@') || word.startsWith('http') ? (
													<Fragment key={wordIndex}>
														{' '}
														<a
															href='#'
															className='text-sky-400 border-b-[0.2rem] border-sky-200 font-medium'
														>
															{word}
														</a>{' '}
													</Fragment>
												) : (
													<Fragment key={wordIndex}> {word} </Fragment>
												)
											)}
										</p>
									</div>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>
	);
};

export default ItIsLikeMagicSection;
