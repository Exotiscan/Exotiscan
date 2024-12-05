package com.example.exotiscanapp.ui.onboarding.screen

import android.content.Context
import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.navigation.fragment.findNavController
import androidx.viewpager2.widget.ViewPager2
import com.example.exotiscanapp.R
import com.example.exotiscanapp.data.sharedpreferences.OnBoardingPreferences
import com.example.exotiscanapp.databinding.FragmentThirdScreenBinding

class ThirdFragmentScreen : Fragment() {
    private lateinit var binding: FragmentThirdScreenBinding
    private lateinit var onBoardingPreferences: OnBoardingPreferences

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        binding = FragmentThirdScreenBinding.inflate(inflater, container, false)
        onBoardingPreferences = OnBoardingPreferences(requireContext())
        binding.finishOnBoard.setOnClickListener{
            findNavController().navigate(R.id.action_viewPagerFragment_to_homeFragment)
            onBoardingPreferences.setOnBoardingFinished(true)
        }
        return binding.root
    }
}