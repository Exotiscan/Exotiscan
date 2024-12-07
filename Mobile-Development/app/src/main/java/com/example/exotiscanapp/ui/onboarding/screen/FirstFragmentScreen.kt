package com.example.exotiscanapp.ui.onboarding.screen

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.FragmentActivity
import androidx.navigation.fragment.findNavController
import androidx.viewpager2.widget.ViewPager2
import com.example.exotiscanapp.R
import com.example.exotiscanapp.databinding.FragmentFirstScreenBinding

class FirstFragmentScreen : Fragment() {
    private lateinit var binding: FragmentFirstScreenBinding
    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        binding = FragmentFirstScreenBinding.inflate(inflater, container,false)
        val view  = activity?.findViewById<ViewPager2>(R.id.viewPager2)
        binding.swipeNextPage.setOnClickListener{
            view?.currentItem = 1
        }
        return binding.root
    }

}